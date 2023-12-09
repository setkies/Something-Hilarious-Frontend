import { atom } from 'recoil';

interface UserWallet {
  id: number;
  money: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  authority: string;
  profileImage: string;
  wallet: UserWallet;
}

const userStore = atom<User | null>({
  key: 'userStore',
  default: null,
});

export default userStore;
