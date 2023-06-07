function tower(n,fromrod,torod,usingrod){
    if(n===1){
        console.log(`move disk 1 from ${fromrod} to ${torod}`)
        return 
    }
    tower(n-1,fromrod,usingrod,torod)
    console.log(`move disk ${n} from ${fromrod} to ${torod}`)
    tower(n-1,usingrod,torod,fromrod)
}
tower(3,'a','b','c')