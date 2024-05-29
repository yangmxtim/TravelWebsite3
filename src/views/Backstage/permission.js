import router from "@/router";
import { getToken } from "@/views/Backstage/composables/auth";
import {
  toast,
  showFullLoading,
  hideFullLoading,
} from "@/views/Backstage/composables/util";
import store from "@/stores/BStore";

// 全局前置守衛，路由變化會觸發
router.beforeEach(async (to, from, next) => {
  // 顯示loading
  showFullLoading();

  const token = getToken();

  // 沒有登入強制跳轉回登入頁面
  if (!token && to.path != "/login") {
    toast("請先登入", "error");
    return next({ path: "/login" });
  }

  // 防止登入後重複登入
  if (token && to.path == "/login") {
    toast("請勿重複登入", "error");
    return next({ path: from.path ? from.path : "/" });
  }

  // 如果用戶登入了，自動獲取用戶信息，並存除在vuex當中
  if (token) {
    await store.dispatch("getinfo");
  }

  // 設置頁面標題
  let title = to.meta.title ? to.meta.title : "" + "-後台系統";
  document.title = title;

  next();
});

// 全局後置守衛
router.afterEach((to, from) => {
  // progressBar 關閉
  hideFullLoading();
});
