/** Short display titles for Site 2.0 cards (Bolt-style). */
export function site2CardTitle(title: string): string {
	const dash = title.split('—');
	if (dash.length > 1) {
		const tail = dash[dash.length - 1]?.trim();
		if (tail && tail.length <= 80) return tail;
	}
	const colon = title.split(':');
	if (colon.length > 1) {
		const tail = colon.slice(1).join(':').trim();
		if (tail && tail.length <= 80) return tail;
	}
	if (title.length > 72) return `${title.slice(0, 69)}…`;
	return title;
}

export function site2CardBlurb(description?: string): string {
	if (!description) return '';
	if (description.length <= 140) return description;
	return `${description.slice(0, 137)}…`;
}
