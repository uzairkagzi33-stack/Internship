function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      // Remove the last character
        prefix = prefix.slice(0, prefix.length - 1);

      // If nothing is left, return empty string
        if (prefix === "") return "";
    }
    }

    return prefix;
}
let strs = ["flower", "flow", "flight"]

console.log(longestCommonPrefix(strs));


