// const getCroppedImageUrl = (url: string) => {
//     const target = 'media/';
//    const index = url.indexOf(target) + target.length;
//    return url.slice(0, index) + 'crop/600/400' + url.slice(index)
// }

// export default getCroppedImageUrl;

const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target);
  
    if (index === -1) {
      // 如果 URL 中不包含 'media/'，直接返回原始 URL
      return url;
    }
  
    // 计算插入位置
    const insertIndex = index + target.length;
    // 构造裁剪后的 URL
    return url.slice(0, insertIndex) + 'crop/600/400/' + url.slice(insertIndex);
  };
  
  export default getCroppedImageUrl;
  