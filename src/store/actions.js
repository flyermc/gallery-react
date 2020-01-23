export const OPEN_IMAGE = 'OPEN_IMAGE';
export const CLOSE_IMAGE = 'CLOSE_IMAGE';

export function openImage(data) {
    return { type: OPEN_IMAGE, data }
}

export function closeImage() {
    return { type: CLOSE_IMAGE }
}
