/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let mergedlist = new ListNode
    let change = mergedlist;
    
    
    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            change.next = list1;
            list1 = list1.next;
        }else{
            change.next = list2;
            list2 = list2.next;
        }
        change = change.next;
        console.log('check change',change)
        console.log('check mergedlist',mergedlist)
        
    }
    
    if(list1 !== null){
        change.next = list1;
    }
    if(list2 !== null){
        change.next = list2;
    }
    
    return mergedlist.next;
};