const rsdkFuncColumns = [
    {
        title: '分类', dataIndex: 'class', render: (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            if (row.FirMerge) {
                obj.props.rowSpan = row.FirMergeCnt;
            } else {
                obj.props.rowSpan = 0;
            }
            return obj;
        }
    },
    {
        title: '功能', dataIndex: 'func', render: (value, row, index) => {
            const obj = {
                children: value,
                props: {},
            };
            if (row.SedMerge) { //是否合并，相同数据只有第一个是true,其他的是false.
                obj.props.rowSpan = row.SedMergeCnt;//第二列合并单元格数
            } else {
                obj.props.rowSpan = 0;
            }
            return obj;
        }
    },
];
export default rsdkFuncColumns
//数据
/*
{FirMerge: false, FirMergeCnt: null, SedMerge: true, SedMergeCnt: 1, case: "test",class: "统计",func: "支付统计",id: 25}
{FirMerge: true, FirMergeCnt: 2, SedMerge: true, SedMergeCnt: 1, case: "test",class: "统计",func: "支付统计",id: 25}*/
