export const OPEN_IMAGE = 'OPEN_IMAGE';

export function openImage(url) {
    return { type: OPEN_IMAGE, url }
}
