<template>
    <div align="center">
        <table>
            <thead>
                <tr>
                   <th class="text">Text</th>
                   <th class="input">Input</th>
                   <th class="time">Time</th>
                </tr>
            </thead>
            <tbody v-bind:key="paragraph.id" v-for="paragraph in paragraphs">           
                <tr>
                    <td class="text">{{paragraph.text}}</td>
                    <td class="input">
                        <textarea></textarea>
                    </td>
                    <td class="time" align="center">{{paragraph.time}}</td>
                </tr>   
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Paragraphs",
    props: ["paragraphs"]
}
</script>

<style scoped>
    table {
      width: 90%;
      border: 1px solid #000;
      border-spacing: 20px
      
    }

    th.text {
      width: 40%;
    }

    th.input {
      width: 40%;
    } 

    textarea {
        width: 100%;
        height: 100%;
        border: solid 1px black;
    }
       
</style>