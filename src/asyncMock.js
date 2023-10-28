const products = [
    {
        id: '1',
        name: 'Samsung Galaxy A34 128gb',
        price: 226.999,
        category: 'celular',
        img: '../images/img1.png',
        description: 'Samsung Galaxy A34 128gb 6gb Ram Awesome Graphite',
        stock: 9
    },

    {
        id: '2',
        name: 'Motorola Moto G42',
        price: 149.999,
        category: 'celular',
        img: '../images/img2.png',
        description: 'Motorola Moto G42 Android 12 Memoria 128 Gb Ram 4',
        stock: 5
    },

    {
        id: '3',
        name: 'Lenovo',
        price: 60.999,
        category: 'tablet',
        img: '../images/img3.png',
        description: 'Tablet lenovo 8va Generacion',
        stock: 7
    },
    {
        id: '4',
        name: 'Apple iPad (9ª generación)',
        price: 310.022,
        category: 'tablet',
        img: '../images/img4.png',
        description: 'Apple iPad (9ª generación) 10.2" Wi-Fi 64GB - Color plata',
        stock: 3
    },

    {
        id: '5',
        name: 'Samsung Galaxy Book3 Pro 14',
        price: 830.999,
        category: 'notebook',
        img: '../images/img5.png',
        description: 'Samsung Galaxy Book3 Pro 14 Intel Core I5 12 Núcleos 16gb Color Graphite',
        stock: 2
    },
]

export const getProducts = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductsById = (id) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (CategoryId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === CategoryId))
        }, 500)
    })
}