import {model, Schema, Document } from 'mongoose';
import { UserRole } from '../../core/entities/Roles';
import { User } from '../../core/entities/User';
import { hashPassword, comparePassword } from '../../utils/cryto';

interface IUserDocument extends User, Document {
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const RoleSchema = new Schema({

});

const userSchema = new Schema<IUserDocument>({
  username: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  roles: {
    type: [Number],
    enum: UserRole,
    required: false
  },
  active: {
    type: Boolean,
    required: true
  },
  password: {
    type: String,
    required: true
   },
});

// Document middlewares
userSchema.pre<IUserDocument>("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
    next();
  } else {
    next()
  }
});

// Methods
userSchema.methods.comparePassword = async function(password: string) {
  return comparePassword(password, this.password);
}

export default model<IUserDocument>('User', userSchema)