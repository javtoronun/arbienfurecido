import { Test } from './test';

export interface User {
    email: string;
    admin: boolean;
    username: string;
    finishedTests: Test[];
}
