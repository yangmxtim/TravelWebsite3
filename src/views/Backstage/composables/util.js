import { ElNotification, ElMessageBox } from "element-plus";
import nProgress from "nprogress";

// message prompt
export function toast(
  message,
  type = "success",
  dangerouslyUseHTMLString = false
) {
  ElNotification({
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 3000,
  });
}
export function showModal(content = "提示", type = "warning", title = "") {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: "確定",
    cancelButtonText: "取消",
    type: "warning",
  });
}

// 顯示全螢幕 loading
export function showFullLoading() {
  nProgress.start();
}
// 隱藏全螢幕 loading
export function hideFullLoading() {
  nProgress.done();
}
