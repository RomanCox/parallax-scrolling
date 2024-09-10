export const scrollOptions = {
    duration: 1.5,
    easing: (t: number) => 1 - Math.pow(1 - t, 4),
}