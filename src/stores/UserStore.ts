import { makeAutoObservable } from 'mobx';

class UserStore {
    isAuthenticated = false;
    token: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setAuthenticated(authenticated: boolean, token: string | null = null) {
        this.isAuthenticated = authenticated;
        this.token = token;
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
        console.log("Аунтификация статус:", authenticated);
    }

    checkAuthentication() {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                this.setAuthenticated(true, token);
            }
        }
    }

    logout() {
        this.setAuthenticated(false);
        localStorage.removeItem('token');
    }

    getToken() {
        return this.token;
    }
}

const userStore = new UserStore();
export default userStore;
