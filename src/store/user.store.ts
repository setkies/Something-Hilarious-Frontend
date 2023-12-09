import { atom } from 'recoil';

const userStore = atom({
  key: 'userStore',
  default: null,
});

export default userStore;
