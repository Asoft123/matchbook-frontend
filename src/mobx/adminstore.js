import { action, configure, makeAutoObservable, observable } from "mobx";

configure({
  enforceActions: "never",
});

import http, { BASE_URL } from "/src/services/HttpService";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

class AdminUserStore {
  isloading = false;
  loading = false;
  isAuth = false;
  navbarOpen = false;
  currentTab = "";
  item_count = "0";
  queryParams = {
    page: "1",
    sort: "",
    order: "ASC",
    status: "",
    pageSize: "5",
    search: "",
  };
  currentUser = {};
  constructor() {
    makeAutoObservable(this, {
      isAuth: observable,
      isloading: observable,
      loading: observable,
      currentUser: observable,
      currentTab: observable,
      queryParams: observable,
      setHeaders: action,
      setCurrent: action,
    });
  }

  toggleLoginstatus = () => {
    this.isloading = !this.isloading;
  };
  toggleLoading = () => {
    this.loading = !this.loading;
  };
  handlesetTab = (payload) => {
    this.currentTab = payload;
    this.queryParams.page = "1";
    this.queryParams.search = "";
    this.queryParams.status = payload;
  };
  toggleNavbar = () => {
    this.navbarOpen = !this.navbarOpen;
  };
  setHeaders = () => {
    const token = sessionStorage.getItem("token");
    http.setJwt(token);
  };
  setSeach = (str) => {
    this.queryParams.search = str;
    this.queryParams.page = "1";
    this.queryParams.pageSize = "5";
  };

  setSort = (payload) => {
    if (this.queryParams.sort == payload) {
      this.queryParams.order === "ASC"
        ? (this.queryParams.order = "DESC")
        : this.queryParams.order === "DESC"
        ? (this.queryParams.order = "ASC")
        : "DESC";
    }

    this.queryParams.sort = payload;
  };
  setUserStatus = (str) => {
    this.queryParams.page = "1";
    this.queryParams.search = "";
    this.queryParams.search = str;
  };
  setPage = (str) => {
    this.queryParams.page = str;
  };
  setPacountPage = (str) => {
    this.item_count = str;
  };
  setItemsPerPage = (str) => {
    this.queryParams.pageSize = str;
  };
  setCurrent = (data) => {
    this.currentUser = data;
  };
  checkAuthStatus = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.isAuth = false;
      return false;
    }
    const decodedAdmin = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedAdmin.exp < currentTime) {
      this.isAuth = false;
      toast.error("Your login has expired");
      return false;
    }
    http.setJwt(token);
    this.isAuth = true;
    return true;
  };

  getAdminById = async (adminId) => {
    this.setHeaders();
    try {
      const { data } = await http.get(`${BASE_URL}/admins/details/${adminId}`);
      return data;
    } catch (error) {
      if (error?.response?.data && error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      return error;
    }
  };
  getAdminProfile = async () => {
    this.setHeaders();
    try {
      const { data } = await http.get(`${BASE_URL}/admins/whoiam`);
      console.log(data.data);
      if (data?.success) {
        this.setCurrent(data?.data);
      }
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  getAllAdmins = async (page, pageSize, search, status, sort, order) => {
    this.setHeaders();
    try {
      const { data } = await http.get(
        `${BASE_URL}/admins?page=${page}&pageSize=${pageSize}&search=${search}&order=${order}&status=${status}&sort=${sort}`
      );
      console.log(data.data);
      this.setPacountPage(data?.meta?.totalItems);
      return data;
    } catch (error) {
      return error;
    }
  };

  updateDisplayPhoto = async (payload, adminId) => {
    this.toggleLoading();
    try {
      const { data } = await http.patch(
        `${BASE_URL}/admins/upload-dp/${adminId}`,
        payload
      );
      if (data?.success) {
        this.toggleLoading();
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      this.toggleLoading();

      if (error?.response?.data && error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      return error;
    }
  };
  InviteAdmin = async (payload) => {
    this.toggleLoading();
    try {
      const { data } = await http.post(`${BASE_URL}/admins/invite`, payload);
      if (data?.success) {
        this.toggleLoading();
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      this.toggleLoading();

      if (error?.response?.data && error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      return error;
    }
  };

  verifyyAcceptToken = async (payload) => {
    this.toggleLoading();
    try {
      const { data } = await await http.post(
        `${BASE_URL}/admins/verify`,
        payload
      );
      if (data?.success) {
        this.toggleLoading();
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      this.toggleLoading();

      if (error?.response?.data && error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      return error;
    }
  };
  acceptToplifters = async (payload) => {
    this.toggleLoading();
    try {
      const { data } = await await http.post(
        `${BASE_URL}/admins/accept`,
        payload
      );
      if (data?.success) {
        this.toggleLoading();
        toast.success(data.message);
      }
      return data;
    } catch (error) {
      this.toggleLoading();
      if (error?.response?.data && error?.response?.data?.error?.message) {
        toast.error(error?.response?.data?.error?.message);
      }
      return error;
    }
  };

  loginAdmin = async (payload) => {
    this.toggleLoginstatus();
    try {
      const { data } = await http.post(`${BASE_URL}/admins/token`, payload);
      console.log("FROM LOGIN", data?.data?.token);
      if (data?.success) {
        this.toggleLoginstatus();
        sessionStorage.setItem("token", data?.data?.token);
      }
      return data;
    } catch (error) {
      this.toggleLoginstatus();
      return error;
    }
  };

  // getAllAdmins = async() => {
  //     try {

  //         const {data} = await http.get(${BASE_URL}/admins)
  //        return data
  //     } catch (error) {
  //       return error
  //     }
  // }
}
const adminAuthStore = new AdminUserStore();

export default adminAuthStore;
