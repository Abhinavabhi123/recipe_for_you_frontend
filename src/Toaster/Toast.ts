import { toast } from "react-hot-toast";

export const showSuccessToast = (message: string) => {
  toast(message, {
    duration: 3000,
    position: "top-center",
    icon: "🎉",
    style: {
      background: "#51C35B",
      color: "#fff",
    },
  });
};
