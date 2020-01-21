export const downloadFile = (file: string, blob: Blob) => {
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = file;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
