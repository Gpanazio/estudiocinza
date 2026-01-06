export interface InstagramMedia {
    id: string;
    media_url: string;
    permalink: string;
    caption?: string;
    thumbnail_url?: string;
    media_type?: string;
}

const INSTAGRAM_FIELDS = 'id,media_url,permalink,caption,thumbnail_url,media_type';

const buildInstagramUrl = (userId: string, accessToken: string, limit: number) =>
    `https://graph.instagram.com/${userId}/media?fields=${INSTAGRAM_FIELDS}&access_token=${accessToken}&limit=${limit}`;

export const fetchInstagramMedia = async (limit = 6): Promise<InstagramMedia[]> => {
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    const userId = import.meta.env.VITE_INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
        throw new Error('Configuração do Instagram ausente. Defina VITE_INSTAGRAM_ACCESS_TOKEN e VITE_INSTAGRAM_USER_ID.');
    }

    const response = await fetch(buildInstagramUrl(userId, accessToken, limit));

    if (!response.ok) {
        throw new Error('Não foi possível carregar o feed do Instagram.');
    }

    const data = await response.json();

    if (!data?.data || !Array.isArray(data.data)) {
        throw new Error('Resposta inesperada ao buscar o Instagram.');
    }

    return data.data as InstagramMedia[];
};
