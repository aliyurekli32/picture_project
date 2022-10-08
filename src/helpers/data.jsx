export const data=[];

const dataPictures=()=>{
    
    for (let i = 0; i < 20; i++) {
        data.push({
            id:`${i}`,
            img:`https://picsum.photos/200/300?random=${i}`,
            content:`resim-${i}.`,

        })
        
    }
    return data
}

dataPictures();
