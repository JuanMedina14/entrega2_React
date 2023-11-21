import { db } from "../firebaseConfig"
import { getDocs, collection, query, where} from "firebase/firestore"

export const getProducts = (categoryId) => {
    return new Promise ((resolve, reject) => {

        const productsRef =  categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        :collection(db, 'products') 

        getDocs(productsRef)
            .then(querySnapshot => {
                console.log(querySnapshot);
                const productsAdapted = querySnapshot.docs.map(documentSnapshot =>{
                    const fields = documentSnapshot.data()

                    return {
                        id: documentSnapshot.id,
                        ...fields
                    }
                })
                resolve(productsAdapted);
            })
            .catch(error => {
                reject(error)
            })
    })
}