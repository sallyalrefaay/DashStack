export const toggleDarkMode = () => {
if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
} else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}
};

export const darkMode = () => {
return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
};