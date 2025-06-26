/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
 
 define (["N/log" , "N/Records"], function(log, records ){


    function beforeSubmit(context){

        const record = context.newRecord;

        record.setValue({
            fieldId: 'memo',
            value: 'project'
        });

        const memo = record.getValue({fieldId: "memo"});
        log.debug("memo", memo);

        
    }

    return{
        beforeSubmit
    }

 });
        


