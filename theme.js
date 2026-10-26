"use strict";

(() => {
	const storageKey = "jornada-cr-theme";
	const root = document.documentElement;

	function updateButtons() {
		const darkMode = root.classList.contains("dark");
		for (const button of document.querySelectorAll("[data-theme-toggle]")) {
			button.setAttribute("aria-checked", String(darkMode));
			button.setAttribute("aria-label", darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
			button.title = darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro";
		}
	}

	try {
		root.classList.toggle("dark", localStorage.getItem(storageKey) === "dark");
	} catch {
		root.classList.remove("dark");
	}

	document.querySelectorAll("[data-theme-toggle]").forEach(button => {
		button.addEventListener("click", () => {
			const darkMode = !root.classList.contains("dark");
			root.classList.toggle("dark", darkMode);
			try {
				localStorage.setItem(storageKey, darkMode ? "dark" : "light");
			} catch {}
			updateButtons();
		});
	});

	updateButtons();
})();