export function extractOfficeNames(arr) {
  if (arr.length <= 0) return [];
  return arr?.map((item) => item?.name);
}

export function millifyMan(number) {
  if (Math.abs(number) >= 1e12) {
    return (number / 1e12).toFixed(3).replace(/\.?0+$/, "") + "T"; // Trillions
  } else if (Math.abs(number) >= 1e9) {
    return (number / 1e9).toFixed(3).replace(/\.?0+$/, "") + "B"; // Billions
  } else if (Math.abs(number) >= 1e6) {
    return (number / 1e6).toFixed(3).replace(/\.?0+$/, "") + "M"; // Millions
  } else if (Math.abs(number) >= 1e3) {
    return (number / 1e3).toFixed(3).replace(/\.?0+$/, "") + "K"; // Thousands
  }
  return number.toFixed(3).replace(/\.?0+$/, ""); // Less than 1,000 with three decimal places
}

export function allowedAdminRoles(allowedRoles, userRole) {
  const hasAccess = allowedRoles.includes(userRole);
  return hasAccess;
}

export function extractCategoryNames(arr) {
  if (arr.length <= 0) return [];
  return arr?.map((item) => item?.title);
}

export function removeUnderscores(str) {
  return str.replace(/_/g, " ");
}
