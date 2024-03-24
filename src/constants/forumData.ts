export type ForumCategory = {
    heading: string;
    subcategories: string[];
};

export const forumData: ForumCategory[] = [
    {
        heading: 'Lobby',
        subcategories: ['Announcements', 'Feedback & Suggestions', 'Staff Room'],
    },
    {
        heading: 'Discussions',
        subcategories: ['General News', 'Science & Technology', 'Entertainment', 'Sports & Fitness'],
    },
    {
        heading: 'Education & Career',
        subcategories: ['Languages', 'Information Technology', 'Engineering', 'Economics & Finance'],
    },
];
export function findParentHeading(subcategory: string): string {
    for (const category of forumData) {
        if (category.subcategories.includes(subcategory)) {
            return category.heading;
        }
    }
    return ""; // subcategory not found
}
