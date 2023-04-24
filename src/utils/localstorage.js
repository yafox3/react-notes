export default class LocalStorage {
	static post(key, obj) {
		localStorage.setItem(key, JSON.stringify(obj))
	}
	static get(key) {
		return JSON.parse(localStorage.getItem(key) || '[]')
	}
	static remove(key, id) {
		const all = this.get(key)
		if (all) {
			const filtred = all.filter((note) => note.id !== id)
			localStorage.removeItem(key)
			this.post(key, filtred)
		}
	}
}