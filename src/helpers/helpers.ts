export function formatDate(date: Date): string {

    const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        weekday: 'short'
    });

    const formattedDate = dateFormatter.format(date);
    const reversedDate = formattedDate.split(', ').reverse().join(', ');

    return reversedDate;
}