<template>
    <div class="face-pagination" :class="[
          plain ? 'face-pagination-plain' : ''
        ]">

        <span v-if="total" class="face-pagination-total">共 {{total}} 条</span>

        <a class="face-pagination-number" :class="{'face-pagination-disable':pageNo == 1}" @click="pageButtonEvent(pageNo - 1)"><i class="face-icon bim-angle-left"></i></a>

        <template v-if="!single">
            <!-- 总数小于等于8 -->
            <a v-if="pageCount<9" class="face-pagination-number" :class="{'cur':pageNo == n}" v-for="n in pageCount" :key="n" @click="pageButtonEvent(n)">{{n}}</a>

             <!--总数大于8 当前小于5-->
            <template v-if="pageCount>8 && pageNo<6">
                <a class="face-pagination-number" :class="{'cur':pageNo == n}" v-for="n in pageNo+2>5?pageNo+2:5" :key="n" @click="pageButtonEvent(n)">{{n}}</a>
                <span class="face-page-ellipsis">...</span>
                <a class="face-pagination-number" :class="{'cur':pageNo == pageCount}" @click="pageButtonEvent(pageCount)">{{pageCount}}</a>
            </template>

             <!--总数大于8 当前大于5小于总数减去4-->
            <template v-if="pageCount>8 && pageNo>5 && pageNo<pageCount-3">
                <a class="face-pagination-number" @click="pageButtonEvent(1)">1</a>
                <span class="face-page-ellipsis">...</span>
                <a v-if="pageNo-(n+1)<3" class="face-pagination-number" :class="{'cur':pageNo == n}" v-for="n in pageNo+2" :key="n" @click="pageButtonEvent(n)">{{n}}</a>
                <span class="face-page-ellipsis">...</span>
                <a class="face-pagination-number" :class="{'cur':pageNo == pageCount}">{{pageCount}}</a>
            </template>

            <!--总数大于8 当前大于总数减去4-->
            <template v-if="pageCount>8 && pageNo>pageCount-4">
                <a class="face-pagination-number"  @click="pageButtonEvent(1)">1</a>
                <span class="face-page-ellipsis">...</span>
                <a v-for="n in pageCount" class="face-pagination-number" :class="{'cur':pageNo == n}" v-if="n > (pageCount-3>pageNo?pageNo-4:pageCount-7)" :key="n" @click="pageButtonEvent(n)">{{n}}</a>
            </template>
        </template>

        <a class="face-pagination-number" :class="{'face-pagination-disable':pageNo == pageCount}" @click="pageButtonEvent(pageNo + 1)"><i class="face-icon bim-angle-right"></i></a>
    </div>
</template>

<script>
    export default {
        name: 'face-pagination',

        props: {
            startPage: {
              type:Number,
              default:1
            },
            pageCount: Number,
            plain: Boolean,
            single: Boolean,
            total: Number
        },

        data(){
            return{
                pageNo:this.startPage
            }
        },

        methods: {
            pageButtonEvent(n){
                if(n>=1 && n<=this.pageCount){
                    this.pageNo = n;
                    this.$emit('pageButtonEvent',n);
                }
            }
        }
    }
</script>
