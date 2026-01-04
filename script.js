// ==========================================
// 1. ДАННЫЕ
// ==========================================

const points = [
    // Основной круг (0-215)
    { id: 0, xPercent: 0, yPercent: 99.9712 },
    { id: 1, xPercent: 2.8807, yPercent: 99.9712 },
    { id: 2, xPercent: 5.7614, yPercent: 99.9712 },
    { id: 3, xPercent: 8.642, yPercent: 99.9712 },
    { id: 4, xPercent: 11.5227, yPercent: 99.9712 },
    { id: 5, xPercent: 14.4034, yPercent: 99.9712 },
    { id: 6, xPercent: 17.2841, yPercent: 99.9712 },
    { id: 7, xPercent: 20.1648, yPercent: 99.9712 },
    { id: 8, xPercent: 23.0455, yPercent: 99.9712 },
    { id: 9, xPercent: 25.9261, yPercent: 99.9712 },
    { id: 10, xPercent: 27.2628, yPercent: 97.4189 },
    { id: 11, xPercent: 28.5994, yPercent: 94.8666 },
    { id: 12, xPercent: 29.936, yPercent: 92.3143 },
    { id: 13, xPercent: 31.2727, yPercent: 89.7621 },
    { id: 14, xPercent: 32.6093, yPercent: 87.2098 },
    { id: 15, xPercent: 33.946, yPercent: 84.6575 },
    { id: 16, xPercent: 35.2826, yPercent: 82.1052 },
    { id: 17, xPercent: 36.6192, yPercent: 79.5529 },
    { id: 18, xPercent: 37.9559, yPercent: 77.0006 },
    { id: 19, xPercent: 39.2925, yPercent: 74.4483 },
    { id: 20, xPercent: 40.6291, yPercent: 71.8961 },
    { id: 21, xPercent: 41.9658, yPercent: 69.3438 }, // Телепорт 21->33
    { id: 22, xPercent: 43.3024, yPercent: 66.7915 },
    { id: 23, xPercent: 44.6391, yPercent: 64.2392 },
    { id: 24, xPercent: 45.9757, yPercent: 61.6869 },
    { id: 25, xPercent: 47.3123, yPercent: 59.1346 },
    { id: 26, xPercent: 48.649, yPercent: 56.5824 },
    { id: 27, xPercent: 49.9856, yPercent: 54.0301 }, // Центр вход
    { id: 28, xPercent: 51.3222, yPercent: 56.5824 },
    { id: 29, xPercent: 52.6589, yPercent: 59.1346 },
    { id: 30, xPercent: 53.9955, yPercent: 61.6869 },
    { id: 31, xPercent: 55.3321, yPercent: 64.2392 },
    { id: 32, xPercent: 56.6688, yPercent: 66.7915 },
    { id: 33, xPercent: 58.0054, yPercent: 69.3438 },
    { id: 34, xPercent: 59.3421, yPercent: 71.8961 },
    { id: 35, xPercent: 60.6787, yPercent: 74.4483 },
    { id: 36, xPercent: 62.0153, yPercent: 77.0006 },
    { id: 37, xPercent: 63.352, yPercent: 79.5529 },
    { id: 38, xPercent: 64.6886, yPercent: 82.1052 },
    { id: 39, xPercent: 66.0252, yPercent: 84.6575 },
    { id: 40, xPercent: 67.3619, yPercent: 87.2098 },
    { id: 41, xPercent: 68.6985, yPercent: 89.7621 },
    { id: 42, xPercent: 70.0351, yPercent: 92.3143 },
    { id: 43, xPercent: 71.3718, yPercent: 94.8666 },
    { id: 44, xPercent: 72.7084, yPercent: 97.4189 },
    { id: 45, xPercent: 74.0451, yPercent: 99.9712 },
    { id: 46, xPercent: 76.9257, yPercent: 99.9712 },
    { id: 47, xPercent: 79.8064, yPercent: 99.9712 },
    { id: 48, xPercent: 82.6871, yPercent: 99.9712 },
    { id: 49, xPercent: 85.5678, yPercent: 99.9712 },
    { id: 50, xPercent: 88.4485, yPercent: 99.9712 },
    { id: 51, xPercent: 91.3291, yPercent: 99.9712 },
    { id: 52, xPercent: 94.2098, yPercent: 99.9712 },
    { id: 53, xPercent: 97.0905, yPercent: 99.9712 }, // ВОРОТА ИГРОКА 2
    { id: 54, xPercent: 99.9712, yPercent: 99.9712 }, // ВХОД ИГРОКА 2
    { id: 55, xPercent: 99.9712, yPercent: 97.0905 },
    { id: 56, xPercent: 99.9712, yPercent: 94.2098 },
    { id: 57, xPercent: 99.9712, yPercent: 91.3291 },
    { id: 58, xPercent: 99.9712, yPercent: 88.4485 },
    { id: 59, xPercent: 99.9712, yPercent: 85.5678 },
    { id: 60, xPercent: 99.9712, yPercent: 82.6871 },
    { id: 61, xPercent: 99.9712, yPercent: 79.8064 },
    { id: 62, xPercent: 99.9712, yPercent: 76.9257 },
    { id: 63, xPercent: 99.9712, yPercent: 74.0451 },
    { id: 64, xPercent: 97.4189, yPercent: 72.7084 },
    { id: 65, xPercent: 94.8666, yPercent: 71.3718 },
    { id: 66, xPercent: 92.3143, yPercent: 70.0351 },
    { id: 67, xPercent: 89.7621, yPercent: 68.6985 },
    { id: 68, xPercent: 87.2098, yPercent: 67.3619 },
    { id: 69, xPercent: 84.6575, yPercent: 66.0252 },
    { id: 70, xPercent: 82.1052, yPercent: 64.6886 },
    { id: 71, xPercent: 79.5529, yPercent: 63.352 },
    { id: 72, xPercent: 77.0006, yPercent: 62.0153 },
    { id: 73, xPercent: 74.4483, yPercent: 60.6787 },
    { id: 74, xPercent: 71.8961, yPercent: 59.3421 },
    { id: 75, xPercent: 69.3438, yPercent: 58.0054 },
    { id: 76, xPercent: 66.7915, yPercent: 56.6688 },
    { id: 77, xPercent: 64.2392, yPercent: 55.3321 },
    { id: 78, xPercent: 61.6869, yPercent: 53.9955 },
    { id: 79, xPercent: 59.1346, yPercent: 52.6589 },
    { id: 80, xPercent: 56.5824, yPercent: 51.3222 },
    { id: 81, xPercent: 54.0301, yPercent: 49.9856 }, // Центр вход
    { id: 82, xPercent: 56.5824, yPercent: 48.649 },
    { id: 83, xPercent: 59.1346, yPercent: 47.3123 },
    { id: 84, xPercent: 61.6869, yPercent: 45.9757 },
    { id: 85, xPercent: 64.2392, yPercent: 44.6391 },
    { id: 86, xPercent: 66.7915, yPercent: 43.3024 },
    { id: 87, xPercent: 69.3438, yPercent: 41.9658 },
    { id: 88, xPercent: 71.8961, yPercent: 40.6291 },
    { id: 89, xPercent: 74.4483, yPercent: 39.2925 },
    { id: 90, xPercent: 77.0006, yPercent: 37.9559 },
    { id: 91, xPercent: 79.5529, yPercent: 36.6192 },
    { id: 92, xPercent: 82.1052, yPercent: 35.2826 },
    { id: 93, xPercent: 84.6575, yPercent: 33.946 },
    { id: 94, xPercent: 87.2098, yPercent: 32.6093 },
    { id: 95, xPercent: 89.7621, yPercent: 31.2727 },
    { id: 96, xPercent: 92.3143, yPercent: 29.936 },
    { id: 97, xPercent: 94.8666, yPercent: 28.5994 },
    { id: 98, xPercent: 97.4189, yPercent: 27.2628 },
    { id: 99, xPercent: 99.9712, yPercent: 25.9261 },
    { id: 100, xPercent: 99.9712, yPercent: 23.0455 },
    { id: 101, xPercent: 99.9712, yPercent: 20.1648 },
    { id: 102, xPercent: 99.9712, yPercent: 17.2841 },
    { id: 103, xPercent: 99.9712, yPercent: 14.4034 },
    { id: 104, xPercent: 99.9712, yPercent: 11.5227 },
    { id: 105, xPercent: 99.9712, yPercent: 8.642 },
    { id: 106, xPercent: 99.9712, yPercent: 5.7614 },
    { id: 107, xPercent: 99.9712, yPercent: 2.8807 }, // ВОРОТА ИГРОКА 3
    { id: 108, xPercent: 99.9712, yPercent: 0 }, // ВХОД ИГРОКА 3
    { id: 109, xPercent: 97.0905, yPercent: 0 },
    { id: 110, xPercent: 94.2098, yPercent: 0 },
    { id: 111, xPercent: 91.3291, yPercent: 0 },
    { id: 112, xPercent: 88.4485, yPercent: 0 },
    { id: 113, xPercent: 85.5678, yPercent: 0 },
    { id: 114, xPercent: 82.6871, yPercent: 0 },
    { id: 115, xPercent: 79.8064, yPercent: 0 },
    { id: 116, xPercent: 76.9257, yPercent: 0 },
    { id: 117, xPercent: 74.0451, yPercent: 0 },
    { id: 118, xPercent: 72.7084, yPercent: 2.5523 },
    { id: 119, xPercent: 71.3718, yPercent: 5.1046 },
    { id: 120, xPercent: 70.0351, yPercent: 7.6569 },
    { id: 121, xPercent: 68.6985, yPercent: 10.2091 },
    { id: 122, xPercent: 67.3619, yPercent: 12.7614 },
    { id: 123, xPercent: 66.0252, yPercent: 15.3137 },
    { id: 124, xPercent: 64.6886, yPercent: 17.866 },
    { id: 125, xPercent: 63.352, yPercent: 20.4183 },
    { id: 126, xPercent: 62.0153, yPercent: 22.9706 },
    { id: 127, xPercent: 60.6787, yPercent: 25.5228 },
    { id: 128, xPercent: 59.3421, yPercent: 28.0751 },
    { id: 129, xPercent: 58.0054, yPercent: 30.6274 },
    { id: 130, xPercent: 56.6688, yPercent: 33.1797 },
    { id: 131, xPercent: 55.3321, yPercent: 35.732 },
    { id: 132, xPercent: 53.9955, yPercent: 38.2843 },
    { id: 133, xPercent: 52.6589, yPercent: 40.8366 },
    { id: 134, xPercent: 51.3222, yPercent: 43.3888 },
    { id: 135, xPercent: 49.9856, yPercent: 45.9411 }, // Центр вход
    { id: 136, xPercent: 48.649, yPercent: 43.3888 },
    { id: 137, xPercent: 47.3123, yPercent: 40.8366 },
    { id: 138, xPercent: 45.9757, yPercent: 38.2843 },
    { id: 139, xPercent: 44.6391, yPercent: 35.732 },
    { id: 140, xPercent: 43.3024, yPercent: 33.1797 },
    { id: 141, xPercent: 41.9658, yPercent: 30.6274 },
    { id: 142, xPercent: 40.6291, yPercent: 28.0751 },
    { id: 143, xPercent: 39.2925, yPercent: 25.5228 },
    { id: 144, xPercent: 37.9559, yPercent: 22.9706 },
    { id: 145, xPercent: 36.6192, yPercent: 20.4183 },
    { id: 146, xPercent: 35.2826, yPercent: 17.866 },
    { id: 147, xPercent: 33.946, yPercent: 15.3137 },
    { id: 148, xPercent: 32.6093, yPercent: 12.7614 },
    { id: 149, xPercent: 31.2727, yPercent: 10.2091 },
    { id: 150, xPercent: 29.936, yPercent: 7.6569 },
    { id: 151, xPercent: 28.5994, yPercent: 5.1046 },
    { id: 152, xPercent: 27.2628, yPercent: 2.5523 },
    { id: 153, xPercent: 25.9261, yPercent: 0 },
    { id: 154, xPercent: 23.0455, yPercent: 0 },
    { id: 155, xPercent: 20.1648, yPercent: 0 },
    { id: 156, xPercent: 17.2841, yPercent: 0 },
    { id: 157, xPercent: 14.4034, yPercent: 0 },
    { id: 158, xPercent: 11.5227, yPercent: 0 },
    { id: 159, xPercent: 8.642, yPercent: 0 },
    { id: 160, xPercent: 5.7614, yPercent: 0 },
    { id: 161, xPercent: 2.8807, yPercent: 0 }, // ВОРОТА ИГРОКА 4
    { id: 162, xPercent: 0, yPercent: 0 }, // ВХОД ИГРОКА 4
    { id: 163, xPercent: 0, yPercent: 2.8807 },
    { id: 164, xPercent: 0, yPercent: 5.7614 },
    { id: 165, xPercent: 0, yPercent: 8.642 },
    { id: 166, xPercent: 0, yPercent: 11.5227 },
    { id: 167, xPercent: 0, yPercent: 14.4034 },
    { id: 168, xPercent: 0, yPercent: 17.2841 },
    { id: 169, xPercent: 0, yPercent: 20.1648 },
    { id: 170, xPercent: 0, yPercent: 23.0455 },
    { id: 171, xPercent: 0, yPercent: 25.9261 },
    { id: 172, xPercent: 2.5523, yPercent: 27.2628 },
    { id: 173, xPercent: 5.1046, yPercent: 28.5994 },
    { id: 174, xPercent: 7.6569, yPercent: 29.936 },
    { id: 175, xPercent: 10.2091, yPercent: 31.2727 },
    { id: 176, xPercent: 12.7614, yPercent: 32.6093 },
    { id: 177, xPercent: 15.3137, yPercent: 33.946 },
    { id: 178, xPercent: 17.866, yPercent: 35.2826 },
    { id: 179, xPercent: 20.4183, yPercent: 36.6192 },
    { id: 180, xPercent: 22.9706, yPercent: 37.9559 },
    { id: 181, xPercent: 25.5228, yPercent: 39.2925 },
    { id: 182, xPercent: 28.0751, yPercent: 40.6291 },
    { id: 183, xPercent: 30.6274, yPercent: 41.9658 },
    { id: 184, xPercent: 33.1797, yPercent: 43.3024 },
    { id: 185, xPercent: 35.732, yPercent: 44.6391 },
    { id: 186, xPercent: 38.2843, yPercent: 45.9757 },
    { id: 187, xPercent: 40.8366, yPercent: 47.3123 },
    { id: 188, xPercent: 43.3888, yPercent: 48.649 },
    { id: 189, xPercent: 45.9411, yPercent: 49.9856 }, // Центр вход
    { id: 190, xPercent: 43.3888, yPercent: 51.3222 },
    { id: 191, xPercent: 40.8366, yPercent: 52.6589 },
    { id: 192, xPercent: 38.2843, yPercent: 53.9955 },
    { id: 193, xPercent: 35.732, yPercent: 55.3321 },
    { id: 194, xPercent: 33.1797, yPercent: 56.6688 },
    { id: 195, xPercent: 30.6274, yPercent: 58.0054 },
    { id: 196, xPercent: 28.0751, yPercent: 59.3421 },
    { id: 197, xPercent: 25.5228, yPercent: 60.6787 },
    { id: 198, xPercent: 22.9706, yPercent: 62.0153 },
    { id: 199, xPercent: 20.4183, yPercent: 63.352 },
    { id: 200, xPercent: 17.866, yPercent: 64.6886 },
    { id: 201, xPercent: 15.3137, yPercent: 66.0252 },
    { id: 202, xPercent: 12.7614, yPercent: 67.3619 },
    { id: 203, xPercent: 10.2091, yPercent: 68.6985 },
    { id: 204, xPercent: 7.6569, yPercent: 70.0351 },
    { id: 205, xPercent: 5.1046, yPercent: 71.3718 },
    { id: 206, xPercent: 2.5523, yPercent: 72.7084 },
    { id: 207, xPercent: 0, yPercent: 74.0451 },
    { id: 208, xPercent: 0, yPercent: 76.9257 },
    { id: 209, xPercent: 0, yPercent: 79.8064 },
    { id: 210, xPercent: 0, yPercent: 82.6871 },
    { id: 211, xPercent: 0, yPercent: 85.5678 },
    { id: 212, xPercent: 0, yPercent: 88.4485 },
    { id: 213, xPercent: 0, yPercent: 91.3291 },
    { id: 214, xPercent: 0, yPercent: 94.2098 },
    { id: 215, xPercent: 0, yPercent: 97.0905 }, // ВОРОТА ИГРОКА 1
    
    // --- СПЕЦЗОНЫ ---
    { id: "Центр", xPercent: 50, yPercent: 50 },
    // Игрок 1
    { id: "Финиш1_1", xPercent: 2.0366, yPercent: 97.9634 },
    { id: "Финиш1_2", xPercent: 4.0733, yPercent: 95.9267 },
    { id: "Финиш1_3", xPercent: 6.1099, yPercent: 93.8901 },
    { id: "Финиш1_4", xPercent: 8.1466, yPercent: 91.8534 },
    { id: "Финиш1_5", xPercent: 10.1832, yPercent: 89.8168 },
    { id: "Плен1_1", xPercent: 6.1099, yPercent: 81.6673 },
    { id: "Плен1_2", xPercent: 8.1466, yPercent: 83.704 },
    { id: "Плен1_3", xPercent: 10.1832, yPercent: 85.7406 },
    { id: "Плен1_4", xPercent: 12.2199, yPercent: 87.7773 },
    { id: "Плен1_5", xPercent: 14.2565, yPercent: 89.8139 },
    { id: "Плен1_6", xPercent: 16.2931, yPercent: 91.8506 },
    { id: "Плен1_7", xPercent: 18.3298, yPercent: 93.8872 },
    { id: "Старт1_1", xPercent: 22.4059, yPercent: 77.5941 },
    { id: "Старт1_2", xPercent: 20.3693, yPercent: 79.6307 },
    { id: "Старт1_3", xPercent: 18.3327, yPercent: 81.6673 },
    { id: "Старт1_4", xPercent: 16.296, yPercent: 83.704 },
    { id: "Старт1_5", xPercent: 14.2594, yPercent: 85.7406 },
    
    // Игрок 2 (Поворот на 90 по часовой относительно первого, данные из твоего CSV)
    { id: "Финиш2_1", xPercent: 2.0366, yPercent: 2.0366 },
    { id: "Финиш2_2", xPercent: 4.0733, yPercent: 4.0733 },
    { id: "Финиш2_3", xPercent: 6.1099, yPercent: 6.1099 },
    { id: "Финиш2_4", xPercent: 8.1466, yPercent: 8.1466 },
    { id: "Финиш2_5", xPercent: 10.1832, yPercent: 10.1832 },
    { id: "Плен2_1", xPercent: 6.1099, yPercent: 18.3327 },
    { id: "Плен2_2", xPercent: 8.1466, yPercent: 16.296 },
    { id: "Плен2_3", xPercent: 10.1832, yPercent: 14.2594 },
    { id: "Плен2_4", xPercent: 12.2199, yPercent: 12.2227 },
    { id: "Плен2_5", xPercent: 14.2565, yPercent: 10.1861 },
    { id: "Плен2_6", xPercent: 16.2931, yPercent: 8.1494 },
    { id: "Плен2_7", xPercent: 18.3298, yPercent: 6.1128 },
    { id: "Старт2_1", xPercent: 14.2565, yPercent: 14.2565 },
    { id: "Старт2_2", xPercent: 16.2931, yPercent: 16.2931 },
    { id: "Старт2_3", xPercent: 18.3298, yPercent: 18.3298 },
    { id: "Старт2_4", xPercent: 20.3664, yPercent: 20.3664 },
    { id: "Старт2_5", xPercent: 22.4031, yPercent: 22.4031 },

     // Игрок 3
    { id: "Финиш3_1", xPercent: 97.9634, yPercent: 2.0366 },
    { id: "Финиш3_2", xPercent: 95.9267, yPercent: 4.0733 },
    { id: "Финиш3_3", xPercent: 93.8901, yPercent: 6.1099 },
    { id: "Финиш3_4", xPercent: 91.8534, yPercent: 8.1466 },
    { id: "Финиш3_5", xPercent: 89.8168, yPercent: 10.1832 },
    { id: "Плен3_1", xPercent: 81.6673, yPercent: 6.1099 },
    { id: "Плен3_2", xPercent: 83.704, yPercent: 8.1466 },
    { id: "Плен3_3", xPercent: 85.7406, yPercent: 10.1832 },
    { id: "Плен3_4", xPercent: 87.7773, yPercent: 12.2199 },
    { id: "Плен3_5", xPercent: 89.8139, yPercent: 14.2565 },
    { id: "Плен3_6", xPercent: 91.8506, yPercent: 16.2931 },
    { id: "Плен3_7", xPercent: 93.8872, yPercent: 18.3298 },
    { id: "Старт3_1", xPercent: 77.5912, yPercent: 22.4059 },
    { id: "Старт3_2", xPercent: 79.6278, yPercent: 20.3693 },
    { id: "Старт3_3", xPercent: 81.6645, yPercent: 18.3327 },
    { id: "Старт3_4", xPercent: 83.7011, yPercent: 16.296 },
    { id: "Старт3_5", xPercent: 85.7377, yPercent: 14.2594 },

    // Игрок 4
    { id: "Финиш4_1", xPercent: 97.9634, yPercent: 97.9634 },
    { id: "Финиш4_2", xPercent: 95.9267, yPercent: 95.9267 },
    { id: "Финиш4_3", xPercent: 93.8901, yPercent: 93.8901 },
    { id: "Финиш4_4", xPercent: 91.8534, yPercent: 91.8534 },
    { id: "Финиш4_5", xPercent: 89.8168, yPercent: 89.8168 },
    { id: "Плен4_1", xPercent: 93.8872, yPercent: 81.6673 },
    { id: "Плен4_2", xPercent: 91.8506, yPercent: 83.704 },
    { id: "Плен4_3", xPercent: 89.8139, yPercent: 85.7406 },
    { id: "Плен4_4", xPercent: 87.7773, yPercent: 87.7773 },
    { id: "Плен4_5", xPercent: 85.7406, yPercent: 89.8139 },
    { id: "Плен4_6", xPercent: 83.704, yPercent: 91.8506 },
    { id: "Плен4_7", xPercent: 81.6673, yPercent: 93.8872 },
    { id: "Старт4_1", xPercent: 77.5912, yPercent: 77.5912 },
    { id: "Старт4_2", xPercent: 79.6278, yPercent: 79.6278 },
    { id: "Старт4_3", xPercent: 81.6645, yPercent: 81.6645 },
    { id: "Старт4_4", xPercent: 83.7011, yPercent: 83.7011 },
    { id: "Старт4_5", xPercent: 85.7377, yPercent: 85.7377 },
];

const pointMap = {};
if (typeof points !== 'undefined') {
    points.forEach(p => pointMap[p.id] = p);
} else {
    alert("Ошибка: points не найден!");
}

const playerSettings = {
    1: { startExit: 0,   gate: 0 },
    2: { startExit: 162, gate: 162 },
    3: { startExit: 108, gate: 108 },
    4: { startExit: 54,  gate: 54  }
};

const unconditionalTeleports = {
    33: 21, 24: 30, 87: 75, 78: 84,
    141: 129, 132: 138, 195: 183, 186: 192
};

const conditionalTeleports = {
    0: { dice: 1, target: 162 },
    162: { dice: 1, target: 108 },
    108: { dice: 1, target: 54 },
    54: { dice: 1, target: 0 },
    27: { dice: 1, target: 189},
    189: { dice: 1, target: 135},
    135: { dice: 1, target: 81},
    81: { dice: 1, target: 27},
};

const centerEntryPoints = [27, 81, 135, 189];
const centerExitOptions = [27, 81, 135, 189];

// ==========================================
// 2. ЛОГИКА ИГРЫ
// ==========================================

// Шаблоны игроков (чтобы брать нужное количество)
const ALL_PLAYERS_DATA = [
    { id: 1, name: "Зеленый", color: "#00FF00" },
    { id: 2, name: "Синий", color: "#00FFFF" },
    { id: 3, name: "Малиновый", color: "#FF00FF" },
    { id: 4, name: "Оранжевый", color: "#FFA500" }
];

const game = {
    turn: 0, 
    dice: [0, 0],
    diceUsed: [false, false],
    selectedDieIndex: null,
    phase: 'roll', 
    
    testMode: false,

    bonusPlayerId: null, 
    savedDieIndex: null, 
    players: [], 
    activeDestinations: [], // Сюда будем писать ID точек, куда можно встать
    pendingMoveInfo: null,

    init: function() {
        renderGame();
    },
    
    toggleTestMode: function() {
        this.testMode = !this.testMode;
        const badge = document.getElementById('test-badge');
        
        // Проверяем, существует ли badge, прежде чем менять стиль
        if (badge) {
            if (this.testMode) {
                badge.style.display = 'block';
                //this.showStatus("ТЕСТ-РЕЖИМ ВКЛЮЧЕН", "red");
            } else {
                badge.style.display = 'none';
                //this.showStatus("Тест-режим выключен", "#aaa");
            }
        }/* else {
            // Если элемента нет, просто пишем в статус
             if (this.testMode) this.showStatus("ТЕСТ-РЕЖИМ (Badge missing)", "red");
             else this.showStatus("Тест-режим выключен", "#aaa");
        }*/
    },

    start: function(count) {
        document.getElementById('start-menu').style.display = 'none';

        let selectedConfigs = [];
        if (count === 2) {
            selectedConfigs = [ALL_PLAYERS_DATA[0], ALL_PLAYERS_DATA[2]];
        } else {
            selectedConfigs = ALL_PLAYERS_DATA.slice(0, count);
        }

        this.players = selectedConfigs.map(cfg => {
            const pieces = [];
            for(let i=1; i<=5; i++) {
                pieces.push({ pos: `Старт${cfg.id}_${i}`, dist: 0 });
            }
            return { ...cfg, pieces: pieces, isFinished: false };
        });

        this.updateUI();
        renderGame();
        //this.showStatus(`Игра на ${count} чел. Нажмите БРОСИТЬ`, "#fff");
    },

    rollDice: function() {
        if (this.phase !== 'roll') return;

        let d1, d2;

        if (this.testMode) {
            const input = prompt("ТЕСТ: Введите два числа через пробел (например: 6 6)", "6 6");
            if (!input) return; 
            
            const parts = input.split(" ").map(Number);
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
                d1 = Math.max(1, Math.min(6, parts[0])); 
                d2 = Math.max(1, Math.min(6, parts[1]));
            } else {
                alert("Неверный формат. Введите два числа.");
                return;
            }
        } else {
            d1 = Math.floor(Math.random() * 6) + 1;
            d2 = Math.floor(Math.random() * 6) + 1;
        }
        
        this.dice = [d1, d2];
        this.diceUsed = [false, false];
        this.selectedDieIndex = null;
        this.phase = 'move'; 

        this.updateUI();
        renderGame(); 

        const player = this.players[this.turn];
        const hasPiecesInStart = player.pieces.some(p => String(p.pos).includes("Старт"));
        const hasPiecesInPrison = player.pieces.some(p => String(p.pos).includes("Плен"));
        const rolledSix = (d1 === 6 || d2 === 6);

        if (rolledSix && (hasPiecesInStart || hasPiecesInPrison)) {
            //this.showStatus("Есть 6! Действуйте.", "lime");
            return; 
        }

        const canMove1 = this.checkIfMovePossible(d1);
        const canMove2 = this.checkIfMovePossible(d2);

        if (!canMove1 && !canMove2) {
            //this.showStatus("Нет ходов! Пропуск...", "red");
            this.diceUsed = [true, true];
            this.phase = 'wait';
            this.updateUI();
            setTimeout(() => this.nextTurn(), 1500);
        } else {
            //this.showStatus("Ваш ход.", "#fff");
            this.updateUI();
        }
    },

    getPieceAt: function(pos) {
        for (let pIdx = 0; pIdx < this.players.length; pIdx++) {
            const pl = this.players[pIdx];
            for (let pcIdx = 0; pcIdx < pl.pieces.length; pcIdx++) {
                if (pl.pieces[pcIdx].pos == pos) return { player: pl, index: pcIdx };
            }
        }
        return null;
    },

    findFreeStartSlot: function(playerId) {
        for (let i = 1; i <= 5; i++) {
            const slot = `Старт${playerId}_${i}`;
            if (!this.getPieceAt(slot)) return slot;
        }
        return null;
    },

    capturePiece: function(victim, capturerId) {
        const victimPlayer = victim.player;
        const victimPieceIdx = victim.index;
        let prisonSlot = null;
        for (let i = 1; i <= 7; i++) {
            const slotId = `Плен${capturerId}_${i}`;
            if (!this.getPieceAt(slotId)) { prisonSlot = slotId; break; }
        }
        if (prisonSlot) {
            victimPlayer.pieces[victimPieceIdx].pos = prisonSlot;
            victimPlayer.pieces[victimPieceIdx].dist = 0; 
            return true;
        }
        return false;
    },
    
    // --- ПРОВЕРКА ПУТИ (CW) ---
    checkPath: function(startPos, steps, playerId) {
        const player = this.players.find(p => p.id === playerId);
        const settings = playerSettings[playerId];
        let currentPos = startPos;
        const pieceObj = player.pieces.find(p => p.pos === startPos);
        let currentDist = pieceObj ? pieceObj.dist : 0;

        for (let s = 1; s <= steps; s++) {
            let nextPos = null;
            
            if (String(currentPos).includes("Финиш")) {
                const currStep = parseInt(currentPos.split('_')[1]);
                if (currStep + 1 > 5) return { valid: false, reason: "wall" };
                nextPos = `Финиш${playerId}_${currStep + 1}`;
            } 
            else if (typeof currentPos === 'number') {
                if (currentPos == settings.gate && currentDist > 30) {
                     nextPos = `Финиш${playerId}_1`;
                } else {
                     nextPos = (currentPos - 1 + 216) % 216;
                }
            } else {
                return { valid: true, pos: null }; 
            }

            const isLastStep = (s === steps);
            const obstacle = this.getPieceAt(nextPos);

            if (obstacle) {
                if (!isLastStep) return { valid: false, reason: "block" };
                
                if (obstacle.player.id === playerId) {
                    if (obstacle.pos === startPos) return { valid: true, pos: nextPos };
                    return { valid: false, reason: "busy_self" };
                }
                if (String(nextPos).includes("Финиш")) return { valid: false, reason: "busy_finish" };
            }

            currentPos = nextPos;
            if (typeof currentPos === 'number') currentDist++; 
        }

        return { valid: true, pos: currentPos };
    },
   
    isMoveValidForPiece: function(pieceIndex, playerId, steps) {
        const player = this.players.find(p => p.id === playerId);
        const piece = player.pieces[pieceIndex];
        const startPos = piece.pos;
        const settings = playerSettings[playerId];

        if (this.phase === 'bonus') {
            if (String(startPos).includes("Старт") || String(startPos).includes("Плен")) return false;
        }

        if (String(startPos).includes("Старт") || String(startPos).includes("Плен")) {
            if (steps !== 6) return false;
            if (String(startPos).includes("Плен")) return this.findFreeStartSlot(player.id) !== null;
            const exitPos = settings.startExit;
            const occupant = this.getPieceAt(exitPos);
            // Можно ходить, если там пусто ИЛИ если там стоит враг
            return !occupant || occupant.player.id !== playerId;
        }

        if (startPos === "Центр") return steps === 3;
        if (centerEntryPoints.includes(startPos) && steps === 3) return true;

        const result = this.checkPath(startPos, steps, playerId);
        return result.valid;
    },

    checkIfMovePossible: function(steps, playerIdOverride = null) {
        // Если передали ID, проверяем его, иначе — текущего игрока
        const player = playerIdOverride 
            ? this.players.find(p => p.id === playerIdOverride) 
            : this.players[this.turn];
            
        for (let i = 0; i < player.pieces.length; i++) {
            // Важно: передаем правильный ID в isMoveValidForPiece
            if (this.isMoveValidForPiece(i, player.id, steps)) return true;
        }
        return false;
    },

    selectDie: function(index) {
        if (this.phase !== 'move') return;
        if (this.diceUsed[index]) return; 
        this.selectedDieIndex = (this.selectedDieIndex === index) ? null : index;
        this.updateUI();
    },

    handlePieceClick: function(pieceIndex, ownerId) {
        const targetPlayer = this.players.find(p => p.id === ownerId);
        const targetPiece = targetPlayer.pieces[pieceIndex];

        // Если сейчас этап выбора цели (горят зеленые точки) 
        // и кликнутая фишка стоит ровно на одной из этих точек:
        if (this.activeDestinations.includes(targetPiece.pos)) {
            // Считаем это кликом по точке назначения
            this.handlePointClick(targetPiece.pos);
            return;
        }
        if (this.phase === 'bonus') {
            if (ownerId !== this.bonusPlayerId) { return; } //{ this.showStatus("Ждем ход соперника!", "red"); return; }
            this.executeMove(pieceIndex, 6, true);
            return;
        }

        if (this.phase !== 'move') return;
        if (ownerId !== this.players[this.turn].id) { return; } //{ this.showStatus("Чужая фишка!", "red"); return; }
        if (this.selectedDieIndex === null) { return; } // { this.showStatus("Выберите кубик!", "yellow"); return; }

        this.executeMove(pieceIndex, this.dice[this.selectedDieIndex], false);
    },

    // Новая версия executeMove: она не ходит, а ИЩЕТ варианты
    executeMove: function(pieceIndex, steps, isBonus) {
        const playerId = isBonus ? this.bonusPlayerId : this.players[this.turn].id;
        const player = this.players.find(p => p.id === playerId);
        const pieceObj = player.pieces[pieceIndex];
        const currentPos = pieceObj.pos;
        
        // Очищаем прошлые варианты
        this.activeDestinations = [];
        this.pendingMoveInfo = { pieceIndex, steps, isBonus, playerId };

        const options = [];

        // 1. ЛОГИКА ЦЕНТРА (Вход в центр или Выход)
        if (currentPos === "Центр") {
            if (steps === 3) {
                // Если выпало 3 в центре — можно выйти на любой из 4 входов
                centerExitOptions.forEach(opt => options.push({ target: opt, dist: 0 }));
            } else {
                //this.showStatus("Нужно 3 для выхода!", "orange");
                return;
            }
        }
        else if (centerEntryPoints.includes(currentPos) && steps === 3) {
            // Если стоим у входа и выпало 3:
            // Вариант А: Зайти в центр
            options.push({ target: "Центр", dist: 0 });
            // Вариант Б: Пойти дальше по кругу (обычный ход)
            const standardMove = this.checkPath(currentPos, steps, playerId);
            if (standardMove.valid) {
                 options.push({ target: standardMove.pos, dist: steps });
            }
        }
        // 2. ЛОГИКА МАГИЧЕСКИХ ТЕЛЕПОРТОВ (Conditional)
        else if (typeof currentPos === 'number' && conditionalTeleports[currentPos] && conditionalTeleports[currentPos].dice === steps) {
            // Вариант А: Телепорт
            const rule = conditionalTeleports[currentPos];
            const distTeleport = (rule.target - currentPos + 216) % 216;
            options.push({ target: rule.target, dist: distTeleport });

            // Вариант Б: Обычный ход (игнорируем телепорт)
            const standardMove = this.checkPath(currentPos, steps, playerId);
            if (standardMove.valid) {
                options.push({ target: standardMove.pos, dist: steps });
            }
        }
        // 3. ОБЫЧНЫЙ ХОД (Старт, Финиш, Поле)
        else {
            // Проверки на Старт/Плен
            if (String(currentPos).includes("Старт") || String(currentPos).includes("Плен")) {
                if (steps === 6) {
                    if (String(currentPos).includes("Плен")) {
                         // Логика спасения из плена (тут нет выбора точки, сразу действие)
                         this.processPrisonEscape(player, currentPos); 
                         return;
                    } else {
                        // Выход со старта
                        const settings = playerSettings[playerId];
                        const newPos = settings.startExit;
                        const occupant = this.getPieceAt(newPos);

                        // Если пусто ИЛИ стоит враг — добавляем вариант хода
                        if (!occupant || occupant.player.id !== playerId) {
                            options.push({ target: newPos, dist: 0 });
                        } else {
                            // Если стоит свой — блокируем
                            this.showStatus("Выход занят своим!", "red"); 
                            return;
                        }
                    }
                } else {
                    return; //this.showStatus("Нужна 6!", "red"); return;
                }
            } else {
                // Обычное движение по полю
                const check = this.checkPath(currentPos, steps, playerId);
                if (!check.valid) {
                    // Обработка ошибок (стена, блок и т.д.)
                    /*if (check.reason === "block") this.showStatus("Путь заблокирован!", "red");
                    else if (check.reason === "busy_self") this.showStatus("Занято своим!", "red");
                    else if (check.reason === "busy_finish") this.showStatus("В доме рубить нельзя!", "red");
                    else if (check.reason === "wall") this.showStatus("Стена финиша!", "orange");*/
                    return;
                }
                options.push({ target: check.pos, dist: (typeof check.pos === 'number' && typeof currentPos === 'number') ? steps : 0 });
            }
        }

        // РЕЗУЛЬТАТ АНАЛИЗА:
        if (options.length === 0) {
            // Ходов нет
            return;
        } else if (options.length === 1) {
            // Только один вариант — ходим сразу (без кликов)
            this.finalizeMove(pieceIndex, options[0].target, isBonus, steps, options[0].dist);
        } else {
            // ЕСТЬ ВЫБОР! (Например: Телепорт или Шаг, Выход 1 или Выход 2)
            // Сохраняем варианты dist для каждой цели, чтобы потом применить правильный
            this.pendingMoveInfo.optionsMap = {};
            options.forEach(opt => {
                this.activeDestinations.push(opt.target);
                this.pendingMoveInfo.optionsMap[opt.target] = opt.dist;
            });
            
            //this.showStatus("Выберите точку назначения...", "#00ff00");
            renderGame(); // Перерисовываем поле, чтобы появились зеленые точки
        }
    },

    // Обработчик клика по ЗЕЛЕНОЙ точке
    handlePointClick: function(targetId) {
        if (!this.activeDestinations.includes(targetId)) return;
        
        const info = this.pendingMoveInfo;
        const distIncrease = info.optionsMap[targetId];

        // Завершаем ход
        this.finalizeMove(info.pieceIndex, targetId, info.isBonus, info.steps, distIncrease);
        
        // Сброс состояния
        this.activeDestinations = [];
        this.pendingMoveInfo = null;
        
        // Снова перерисовываем, чтобы убрать подсветку
        renderGame(); 
    },

    // Вспомогательная для плена (вынес отдельно для чистоты)
    processPrisonEscape: function(player, currentPos) {
        const freeSlot = this.findFreeStartSlot(player.id);
        if (!freeSlot) { return; } //{ this.showStatus("Старт переполнен!", "red"); return; }
        
        // Находим фишку и переносим домой
        const piece = player.pieces.find(p => p.pos === currentPos);
        piece.pos = freeSlot; 
        piece.dist = 0;
        
        const wardenId = parseInt(currentPos.split("Плен")[1].split("_")[0]);
        const wardenName = this.players.find(p => p.id === wardenId).name;

        // Включаем фазу бонуса предварительно, чтобы проверка isMoveValidForPiece
        // знала, что сейчас бонус (и запретила выход из дома)
        this.phase = 'bonus'; 
        
        // ПРОВЕРКА: Может ли тюремщик вообще походить 6-кой?
        // (С учетом того, что из дома выходить нельзя)
        const canWardenMove = this.checkIfMovePossible(6, wardenId);

        if (canWardenMove) {
            //this.showStatus(`Спасен! БОНУС для: ${wardenName}`, "gold");
            this.bonusPlayerId = wardenId;
            this.savedDieIndex = this.selectedDieIndex; // Запоминаем кубик текущего игрока
            renderGame();
        } else {
            //this.showStatus(`Спасен! У ${wardenName} нет ходов для бонуса.`, "#ccc");
            // Отменяем фазу бонуса
            this.phase = 'move'; 
            this.bonusPlayerId = null;
            
            // Продолжаем обычный ход текущего игрока (он ведь потратил 6 на выход)
            // Помечаем кубик как использованный и проверяем конец хода
            this.diceUsed[this.selectedDieIndex] = true;
            this.selectedDieIndex = null;
            this.checkEndTurn();
            
            renderGame();
        }
    },


    finalizeMove: function(pieceIndex, newPos, isBonus, steps, distIncrease) {
        const playerId = isBonus ? this.bonusPlayerId : this.players[this.turn].id;
        const player = this.players.find(p => p.id === playerId);
        const pieceObj = player.pieces[pieceIndex];

        if (newPos !== null) {
            let hops = 0;
            while (unconditionalTeleports[newPos] && hops < 5) {
                newPos = unconditionalTeleports[newPos];
                hops++;
            }

            const occupant = this.getPieceAt(newPos);
            if (occupant) {
                const isSelfLoop = (occupant.player.id === player.id && occupant.index === pieceIndex);
                
                if (!isSelfLoop) {
                    if (occupant.player.id === player.id) { 
                        //this.showStatus("Занято своим!", "red"); 
                        return; 
                    } else { 
                        if (String(newPos).includes("Финиш")) { 
                            //this.showStatus("Здесь нельзя атаковать!", "red"); 
                            return; 
                        }
                        if(!this.capturePiece(occupant, player.id)) { 
                            //this.showStatus("Тюрьма полна!", "red");
                            return; 
                        }
                        //this.showStatus(`Пленен ${occupant.player.name}!`, "cyan");
                    }
                }
            }

            pieceObj.pos = newPos;
            if (typeof distIncrease === 'number') {
                pieceObj.dist += distIncrease;
            }
            
            if (isBonus) {
                //this.showStatus("Бонусный ход завершен.", "lime");
                this.phase = 'move';
                this.diceUsed[this.savedDieIndex] = true; 
                this.selectedDieIndex = null;
                this.bonusPlayerId = null;
            } else {
                this.diceUsed[this.selectedDieIndex] = true;
                this.selectedDieIndex = null;
                //if (!this.showStatus.lastAttack) this.showStatus("Ход сделан", "#ccc");
            }
            
            const allHome = player.pieces.every(p => String(p.pos).includes("Финиш"));
            
            if (allHome && !player.isFinished) {
                player.isFinished = true;
                //this.showStatus(`${player.name} ЗАКОНЧИЛ ИГРУ!`, "gold");
                //alert(`Поздравляем! ${player.name} завел все фишки!`);
            }

            renderGame();
            this.updateUI();

            this.checkEndTurn();
        }
    },

    /*showCenterExitDialog: function(pieceIndex, isBonus) {
        const overlay = document.getElementById('modal-overlay');
        const optionsDiv = document.getElementById('modal-options');
        optionsDiv.innerHTML = ""; 

        centerExitOptions.forEach(target => {
            const btn = document.createElement("button");
            btn.className = "modal-btn";
            btn.innerText = `На ${target}`;
            btn.onclick = () => {
                overlay.style.display = "none";
                this.finalizeMove(pieceIndex, target, isBonus, 3, 0); 
            };
            optionsDiv.appendChild(btn);
        });

        overlay.style.display = "flex";
    },*/

    checkEndTurn: function() {
        const usedCount = (this.diceUsed[0] ? 1 : 0) + (this.diceUsed[1] ? 1 : 0);
        if (usedCount === 2) {
            if (this.dice[0] === 6 && this.dice[1] === 6) {
                //this.showStatus("Дубль 6! Ходите снова.", "gold");
                this.diceUsed = [false, false];
                this.phase = 'roll';
                this.updateUI();
            } else {
                this.phase = 'wait';
                setTimeout(() => this.nextTurn(), 0);
            }
        } else {
            const remainingIdx = this.diceUsed[0] ? 1 : 0;
            if (!this.checkIfMovePossible(this.dice[remainingIdx])) {
                //this.showStatus("Оставшийся кубик сгорает.", "orange");
                this.diceUsed[remainingIdx] = true;
                this.updateUI();
                this.phase = 'wait';
                setTimeout(() => this.nextTurn(), 0);
            }
        }
    },

    nextTurn: function() {
        const activePlayers = this.players.filter(p => !p.isFinished);
        
        if (activePlayers.length <= 1) {
            const loser = activePlayers[0]; 
            const msg = loser 
                ? `ИГРА ОКОНЧЕНА! Проиграл: ${loser.name}` 
                : "ИГРА ОКОНЧЕНА! Все молодцы.";
            
            //this.showStatus(msg, "#fff");
            alert(msg);
            
            this.phase = 'finished'; 
            this.updateUI();
            return; 
        }

        let attempts = 0;
        do {
            this.turn++;
            if (this.turn >= this.players.length) this.turn = 0;
            attempts++;
        } while (this.players[this.turn].isFinished && attempts < 10);

        this.dice = [0, 0];
        this.diceUsed = [false, false];
        this.selectedDieIndex = null;
        this.phase = 'roll';
        this.bonusPlayerId = null;
        this.updateUI();
        renderGame();
        //this.showStatus(`Ход: ${this.players[this.turn].name}`, this.players[this.turn].color);
    },

    updateUI: function() {
        const d1El = document.getElementById('dice1');
        const d2El = document.getElementById('dice2');
        const btn = document.getElementById('roll-btn');
        const status = document.getElementById('status-msg');
        const hud = document.getElementById('center-hud');

        d1El.innerText = this.dice[0] || '';
        d2El.innerText = this.dice[1] || '';

        // Подсветка выбранного кубика
        d1El.style.borderColor = (this.selectedDieIndex === 0) ? "#fff" : "rgba(255,255,255,0.3)";
        d2El.style.borderColor = (this.selectedDieIndex === 1) ? "#fff" : "rgba(255,255,255,0.3)";
        
        // Визуальное отключение использованных
        d1El.style.opacity = this.diceUsed[0] ? "0.2" : "1";
        d2El.style.opacity = this.diceUsed[1] ? "0.2" : "1";

        btn.disabled = (this.phase !== 'roll');
        
        // ОПРЕДЕЛЯЕМ ЦВЕТ ТЕКУЩЕГО ИГРОКА
        let activeColor = "#fff";
        let activeName = "";
        
        if (this.phase === 'bonus') {
            const warden = this.players.find(p => p.id === this.bonusPlayerId);
            activeColor = warden.color;
            activeName = warden.name + " (Бонус)";
            status.innerText = "БОНУСНЫЙ ХОД";
        } else {
            const player = this.players[this.turn];
            if (player) {
                activeColor = player.color;
                activeName = player.name;
                // Убираем имя из статуса, оставляем действие
                /*if (this.phase === 'roll') status.innerText = "БРОСАЙТЕ";
                else if (this.phase === 'move') status.innerText = "ХОДИТЕ";
                else status.innerText = "...";*/
            }
        }

        // Красим HUD в цвет игрока
        //hud.style.boxShadow = `0 0 30px ${activeColor}40`; // 40 - это прозрачность
        //hud.style.borderColor = activeColor;
        //hud.style.backgroundColor = `${activeColor}40`;
        btn.style.color = activeColor;
        if (!btn.disabled) {
            btn.style.borderColor = activeColor;
            //btn.innerText = "БРОСИТЬ";
        } else {
            btn.style.borderColor = "rgba(255,255,255,0.2)";
            //btn.innerText = this.dice[0] ? "..." : "ЖДИТЕ";
        }
    },
    
    showStatus: function(text, color) {
        const el = document.getElementById('status-msg');
        el.innerText = text;
        el.style.color = color || "#aaa";
    }
};

// ==========================================
// 3. ОТРИСОВКА (ОБНОВЛЕННАЯ: ДВА СЛОЯ SVG)
// ==========================================
const gameField = document.getElementById("game-field");
const svgNS = "http://www.w3.org/2000/svg";

// Удаляем старый SVG, если он есть, чтобы создать новую структуру
const oldSvg = document.querySelector("svg");
if (oldSvg) oldSvg.remove();

// Создаем слой для ЛИНИЙ (Снизу)
let svgLines = document.getElementById("svg-lines");
if (!svgLines) {
    svgLines = document.createElementNS(svgNS, "svg");
    svgLines.id = "svg-lines";
    svgLines.style.position = "absolute";
    svgLines.style.width = "100%";
    svgLines.style.height = "100%";
    svgLines.style.pointerEvents = "none";
    svgLines.style.zIndex = "1"; // НИЖЕ точек
    gameField.appendChild(svgLines);
}

// Создаем слой для СТРЕЛОК (Сверху)
let svgArrows = document.getElementById("svg-arrows");
if (!svgArrows) {
    svgArrows = document.createElementNS(svgNS, "svg");
    svgArrows.id = "svg-arrows";
    svgArrows.style.position = "absolute";
    svgArrows.style.width = "100%";
    svgArrows.style.height = "100%";
    svgArrows.style.pointerEvents = "none";
    svgArrows.style.zIndex = "4"; 
    gameField.appendChild(svgArrows);

    // --- НОВЫЕ МАРКЕРЫ ---
    const defs = document.createElementNS(svgNS, "defs");
    
    // Создаем маркер (наконечник стрелки)
    const marker = document.createElementNS(svgNS, "marker");
    marker.setAttribute("id", "arrow-neon");
    marker.setAttribute("markerWidth", "6");  // Чуть компактнее
    marker.setAttribute("markerHeight", "6");
    marker.setAttribute("refX", "5");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");
    marker.setAttribute("markerUnits", "strokeWidth");

    const poly = document.createElementNS(svgNS, "path");
    // Более острая и стильная форма стрелки
    poly.setAttribute("d", "M0,0 L6,3 L0,6 L1.5,3 Z"); 
    poly.setAttribute("fill", "#00ffff"); // Цвет совпадает с CSS .teleport-arrow
    
    // Добавляем свечение и к наконечнику (опционально, можно через CSS)
    poly.style.filter = "drop-shadow(0 0 2px #00ffff)";

    marker.appendChild(poly);
    defs.appendChild(marker);
    svgArrows.appendChild(defs);
}

function drawLine(p1, p2, color, width = 2) {
    if (!p1 || !p2) return;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", `${p1.xPercent}%`);
    line.setAttribute("y1", `${p1.yPercent}%`);
    line.setAttribute("x2", `${p2.xPercent}%`);
    line.setAttribute("y2", `${p2.yPercent}%`);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", width);
    // Рисуем линии в нижний слой
    svgLines.appendChild(line);
}

function drawCurvedArrow(p1, p2) {
    if (!p1 || !p2) return;
    const w = gameField.clientWidth;
    const h = gameField.clientHeight;
    
    const x1 = (p1.xPercent / 100) * w;
    const y1 = (p1.yPercent / 100) * h;
    const x2 = (p2.xPercent / 100) * w;
    const y2 = (p2.yPercent / 100) * h;
    
    // Вычисляем контрольную точку для изгиба
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    
    // Коэффициент изгиба. Можно поиграть с -0.2 (чем больше по модулю, тем сильнее дуга)
    // Можно сделать его зависимым от расстояния, но пока оставим константу
    const k = -0.25; 
    
    const centerX = w / 2;
    const centerY = h / 2;
    const cx = mx + (centerX - mx) * k;
    const cy = my + (centerY - my) * k;

    const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
    
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    
    // Вместо жесткого задания стилей здесь, даем класс
    path.classList.add("teleport-arrow"); 
    
    // Привязываем наш новый неоновый маркер
    path.setAttribute("marker-end", "url(#arrow-neon)");
    
    svgArrows.appendChild(path);
}

function renderGame() {
    if (typeof points === 'undefined') return;

    // 1. ОЧИСТКА (ВНИМАНИЕ: Мы теперь НЕ удаляем .piece!)
    
    // Чистим линии (нижний слой)
    while (svgLines.lastChild) {
        svgLines.removeChild(svgLines.lastChild);
    }
    
    // Чистим стрелки (верхний слой), но оставляем <defs> с маркерами
    const arrows = svgArrows.querySelectorAll('path');
    arrows.forEach(arrow => arrow.remove());

    // Чистим точки игрового поля (они статичны, но для простоты перерисуем)
    gameField.querySelectorAll(".point").forEach(el => el.remove());

    // 2. Рисуем линии (без изменений)
    points.forEach(point => {
        if (typeof point.id === 'number') {
            let nextId = point.id + 1;
            if (nextId === 216) nextId = 0;
            if (pointMap[nextId]) drawLine(point, pointMap[nextId], "#444", 2);
        }
        if (typeof point.id === 'string') {
            const parts = point.id.split('_'); 
            if (parts.length === 2) {
                const type = parts[0]; 
                const num = parseInt(parts[1]);
                const nextId = `${type}_${num + 1}`;
                if (pointMap[nextId]) {
                    let col = "#555";
                    if (type.includes("Финиш")) col = "#FFD700";
                    if (type.includes("Старт")) col = "#4CAF50";
                    if (type.includes("Плен")) col = "#F44336"; 
                    drawLine(point, pointMap[nextId], col, 2);
                }
            }
        }
    });

    // 3. Рисуем стрелки (без изменений, используем новую функцию из предыдущего шага)
    for (let fromId in unconditionalTeleports) {
        const toId = unconditionalTeleports[fromId];
        if (pointMap[fromId] && pointMap[toId]) drawCurvedArrow(pointMap[fromId], pointMap[toId]);
    }

    // 4. Рисуем точки (без изменений)
    points.forEach(point => {
        const div = document.createElement("div");
        div.className = "point";
        div.style.left = `${point.xPercent}%`;
        div.style.top = `${point.yPercent}%`;
        div.title = point.id;

        // --- ЛОГИКА ПОДСВЕТКИ ЦЕЛЕЙ ---
        if (game.activeDestinations.includes(point.id)) {
            div.classList.add("highlight-dest");
            // Делаем точку кликабельной!
            div.onclick = (e) => {
                e.stopPropagation(); // Чтобы клик не ушел на поле
                game.handlePointClick(point.id);
            };
        }
        
        if (typeof point.id === 'number') {
            if (point.id % 6 === 0) {
                div.style.boxShadow = "0 0 0 4px rgba(255, 0, 0, 0.6)";
                div.style.zIndex = "3";
            } else if (point.id % 3 === 0) {
                div.style.boxShadow = "0 0 0 4px rgba(255, 235, 59, 0.8)";
                div.style.zIndex = "3";
            }
        }

        const pid = String(point.id);
        if (pid.includes("Старт")) div.style.backgroundColor = "#4CAF50";
        else if (pid.includes("Финиш")) div.style.backgroundColor = "#FFD700";
        else if (pid.includes("Плен")) div.style.backgroundColor = "#F44336";
        else if (pid.includes("Центр")) div.style.backgroundColor = "white";
        else if ([0, 54, 108, 162].includes(point.id)) div.style.backgroundColor = "#fff";
        else div.style.backgroundColor = "#252525ff";
        
        gameField.appendChild(div);
    });

    // 5. РИСУЕМ / ОБНОВЛЯЕМ ФИШКИ (ГЛАВНОЕ ИЗМЕНЕНИЕ!)
    game.players.forEach(player => {
        player.pieces.forEach((pieceObj, index) => {
            const loc = pointMap[pieceObj.pos];
            if (loc) {
                // Генерируем уникальный ID для каждой фишки
                // Пример: "p-1-0" (Игрок 1, фишка 0)
                const pieceId = `p-${player.id}-${index}`;
                
                // Пытаемся найти эту фишку в DOM
                let pieceDiv = document.getElementById(pieceId);

                // Если фишки еще нет (старт игры) — создаем
                if (!pieceDiv) {
                    pieceDiv = document.createElement("div");
                    pieceDiv.id = pieceId; // ВАЖНО: присваиваем ID
                    pieceDiv.classList.add("piece");
                    // Применяем стиль из предыдущего шага (свечение)
                    pieceDiv.style.setProperty('--p-color', player.color);
                    
                    pieceDiv.onclick = (e) => {
                        e.stopPropagation();
                        game.handlePieceClick(index, player.id);
                    };
                    gameField.appendChild(pieceDiv);
                }

                // ОБНОВЛЯЕМ КООРДИНАТЫ
                // Поскольку элемент не удалялся, сработает CSS transition
                pieceDiv.style.left = `${loc.xPercent}%`;
                pieceDiv.style.top = `${loc.yPercent}%`;
                
                // Обновляем состояние Blink (мигание)
                if (game.phase === 'bonus' && player.id === game.bonusPlayerId) {
                    if (game.isMoveValidForPiece(index, player.id, 6)) {
                        pieceDiv.classList.add("blink");
                    } else {
                        pieceDiv.classList.remove("blink");
                    }
                } else {
                    pieceDiv.classList.remove("blink");
                }
            }
        });
    });
}


document.getElementById('dice1').onclick = () => game.selectDie(0);
document.getElementById('dice2').onclick = () => game.selectDie(1);

function updateGameFieldSize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let size;

    // Проверяем, мобильное ли устройство (грубая проверка по ширине)
    const isMobilePortrait = w <= 768 && h > w;
    const isMobileLandscape = h <= 600 && w > h;

    if (isMobilePortrait) {
        // ВЕРТИКАЛЬНО:
        // Оставляем место сверху для Лого и снизу для Кнопок.
        // Доступная высота для поля примерно 70% от экрана (минус отступы)
        const availableHeight = h * 0.70; 
        // Поле не должно быть шире экрана (минус отступы)
        const availableWidth = w * 0.95;
        
        size = Math.min(availableWidth, availableHeight);
        
        // Сдвигаем поле чуть вверх, чтобы оно было между Лого и Кнопками
        // (CSS flex body центрует, но margin поможет визуально скорректировать)
        gameField.style.marginTop = "-10%"; 

    } else if (isMobileLandscape) {
        // ГОРИЗОНТАЛЬНО:
        // Оставляем место справа для панели управления
        const availableWidth = w * 0.80; 
        const availableHeight = h * 0.95;
        
        size = Math.min(availableWidth, availableHeight);
        
        gameField.style.marginTop = "0";
        // Сдвигаем влево, чтобы освободить место справа
        gameField.style.marginLeft = "-10%"; 

    } else {
        // НОУТБУК / ДЕСКТОП (Как было раньше)
        size = Math.min(w, h) * 0.95;
        gameField.style.marginTop = "0";
        gameField.style.marginLeft = "0";
    }

    gameField.style.width = `${size}px`;
    gameField.style.height = `${size}px`;
    renderGame();
}

// START
game.init();
window.addEventListener("resize", updateGameFieldSize);
setTimeout(updateGameFieldSize, 0);

document.addEventListener('keydown', function(event) {
    if (event.shiftKey && (event.code === 'KeyT' || event.key === 'T' || event.key === 'Е')) {
        game.toggleTestMode();
    }
});