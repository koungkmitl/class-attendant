<script>
export default {
    methods:{
    getnamecourse(name){
        let sname = ''
        name = name.replace(/-/g, ' ')
        name = name.split(' ')
        for (let i of name){
        if(name.length == 1){
            sname = i.substring(0, 3)
        }
        else if(i.length > 3){
        sname += i[0]
        }
        }
        return sname.toUpperCase()
    }
    }
}
</script>
