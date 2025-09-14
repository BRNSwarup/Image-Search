const key='vgxX4mrQeTRx-2sm0YjUZL2WmS18IOccY3mcCzKfpro'

let Form_data=document.getElementById('form-data')
let InputData=document.getElementById('input_data')
let ResultsImg=document.getElementById('img-results')
let More=document.getElementById('more')

Form_data.addEventListener('submit',(e)=>{
    e.preventDefault()
    images()
})

let page=1


async function images() {

   let keyword = InputData.value
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12 `
    let res= await fetch(url)
    let json_res= await res.json()
    let main_res=json_res.results
    if(page===1){
        ResultsImg.innerHTML=''
    }

    main_res.map((arr)=>{
        let images=document.createElement('img')
        images.src=arr.urls.small
        ResultsImg.append(images)
    })
        More.style.display="block"
}

More.addEventListener("click",()=>{
    page++
    images()
})

