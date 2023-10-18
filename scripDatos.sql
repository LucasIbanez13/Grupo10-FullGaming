
INSERT INTO `full-gamer`.`users` (`id`, `name`, `email`, `pass`, `rol`, `surname`) VALUES ('1', 'pablo', 'pabloealcaraz@gmail.com', '$2a$10$lTlw4XQCKSIfnJVceyWF4OulrP8yaqGpvpqJFDLL0DI4enKmCNQHi', '1', 'alcaraz');
INSERT INTO `full-gamer`.`users` (`id`, `name`, `email`, `pass`, `rol`, `surname`, `image`, `phone`, `dni`) VALUES ('2', 'gonzalo', 'sotelo-g@live.com.ar', '$2a$10$7sv3eQAMpCnkAbksxpo0N.OKxqTPsuycEy8CtVOPSoGavkzGz6vj2', '1', 'sotelo', '1695949978890_products_.jpg', '1160013670', '37674659');
INSERT INTO `full-gamer`.`users` (`id`, `name`, `email`, `pass`, `rol`, `surname`, `image`) VALUES ('3', 'lucas', 'gabriel@gmail.com', '$2a$10$vA2xxmo92PtLGKpRLdYYqu/VMmmhDBSHMCyfcku.jAzLBcr4pUYEW', '1', 'ibañez', '1695937726494_products_.jpg');
INSERT INTO `full-gamer`.`users` (`id`, `name`, `email`, `pass`, `rol`, `surname`, `image`) VALUES ('4', 'juan', 'nettoo531@gmail.com', '$2a$10$dMDoDsb9v//2be/qTBtfXeJ2y.kukqvUcv9Wo25aY8xRX28YdpGzK', '1', 'vega', '1696023325117_products_.jpeg');


INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('1', 'gigabyte', 'aorus.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('2', 'amd', 'razer.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('3', 'corsair', 'corsair.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('4', 'logitech', 'logitech-logo.png');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('5', 'western digital', 'wd.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('6', 'elgato', 'elgato.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('7', 'amd', 'amd.webp');
INSERT INTO `full-gamer`.`brands` (`id`, `name`, `image`) VALUES ('8', 'intel', 'intel.webp');


INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('1', 'Almacenamiento', 'public (7).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('2', 'Ram', 'public (12).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('3', 'CPU', 'public (14).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('4', 'Motherboard', 'public (18).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('5', 'cpu cooling', 'public (10).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('6', 'otro', 'public (19).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('7', 'teclado', 'public (21).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('8', 'notebook', 'public (17).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('9', 'gabinete', 'public (13).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('10', 'sillas gamer', 'public (23).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('11', 'Placa de video', 'public (24).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('12', 'conectividad', 'public (11).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('13', 'parlante', 'public (20).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('14', 'camara web', 'public (22).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('15', 'fuentes', 'public (9).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('16', 'auriculares', 'public (8).webp');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('17', 'microfono', 'public (15) 1.png');
INSERT INTO `full-gamer`.`category` (`id`, `name`, `image`) VALUES ('18', 'mouse', 'public (16).webp');

INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`, `discount`) VALUES ('microprocesador pc amd Ryzen 5 4600g 8mb 3.7ghz Socket Am4 6 Nucleos 12 Hilos', 'Amd Ryzen 5 4600g', 'Máxima potencia al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!', '12400', '1');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`, `discount`) VALUES ('monitor Gamer pc 24 LG 24gn600-b 144hz 1ms ultragear', '24GN600', 'Una experiencia visual de calidad Este monitor de 24 te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos \\r\\núnicos gracias a una imagen de alta fidelidad.', '300769', '20');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`) VALUES ('notebook asus Core I3 Ultrabook 8gb Ssd 480gb Gamer Csi', 'X515EA', 'La notebook Asus  X515EA es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.', '593999');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`) VALUES ('tarjeta grafica evga geforce rtx 2060 gaming 6gb Gddr6 Hdb', '06G-P4-2060-KR', 'La tarjetas de juego de la serie evga geforce rtx 20, obtiene la mejor experiencia de juego con rendimiento de graficos de proxima generacion, refrigeracion helada y funciones avanzadas de overclocking con el nuevo software evga precision x1.', '578119');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`, `discount`) VALUES ('placa de video nvidia asus dual GTX 1660 SUPER DUAL OC Edition 6GB', 'GTX 1660 SUPER', 'Calidad de imagen Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.', '299999', '10');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`, `discount`) VALUES ('notebook lenovo IdeaPad 3i intel I5 1135g7 Ram 8gb Ssd 256gb Full hd Windows 11', '81X700FVUS', 'Eficiencia a tu alcance Su procesador Intel Core i5 te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.', '406560', '15');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`) VALUES ('razer huntsman tkl', 'razer huntsman v2 tkl', 'Teclado gamer Razer Huntsman V2 QWERTY Clicky Optical Switch Purple español España', '200000');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`) VALUES ('logitechg pro x superlight', 'Logitech Pro Series Pro X Superlight negro', 'Mouse gamer de juego inalámbrico recargable Logitech Pro Series Pro X Superlight negro', '95000');
INSERT INTO `full-gamer`.`products` (`name`, `model`, `description`, `price`) VALUES ('notebook asus', 'asdfdsfdasfd', 'fasfasdgewsgewrgrweer', '214123');
INSERT INTO `full-gamer`.`products` (`name`) VALUES ('');

INSERT INTO `full-gamer`.`image` (`id`) VALUES ('1');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('2', '1695311676668_products_.jpg');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('3', '1695311844531_products_.jpg');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('4', '1695311990875_products_.jpg');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('5', '1695312087652_products_.jpg');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('6', '1695312211433_products_.jpg');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('7', '1695744242438_products_.webp');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('8', '1695744992552_products_.webp');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('9', '1695778606076_products_.webp');
INSERT INTO `full-gamer`.`image` (`id`, `imagePrimaty`) VALUES ('10', '1695778627089_products_.jpg');



