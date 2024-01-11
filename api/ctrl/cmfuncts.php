<?php 
class CmFuncts extends Base{
    function __destruct(){
        /* over write */
    }
    function createTicket(){
        $d=new DateTime;
        $ymd=$d->format('ymd');
        $this->addModel('numerator');
        /* numerator  */
        $this->numerator->andWhere('ymd',$ymd);
        $this->numerator->andWhere('code_id',$this->params->key('code_id'));
        $this->numerator->limit(1);
        $res=$this->numerator->select();
        if(!empty(count($res))){
            $id=$res[0]['id'];
        }else{
            /* create  */
            $this->numerator->colVal('code_id',$this->params->key('code_id'));
            $this->numerator->colVal('ymd',$ymd);
            $id=$this->numerator->save();
        }

        $res=$this->numerator->select($id);

        /* increment 1 */
        $this->numerator->idx='idx + 1';
        $this->numerator->save($id);
        $idx=$res['idx'];
        if($res['idx']<10) $idx='00'.$res['idx'];
        if($res['idx']>=10&&$res['idx']<100) $idx='0'.$res['idx'];
        return 'BM'.$res['code_id'].$res['ymd'].$idx;
    }
}