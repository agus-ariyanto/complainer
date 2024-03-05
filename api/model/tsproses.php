<?php 
/* 
code :  1 komplain,
        2 
catatan : catatan untuk reject        
*/
class TsProses extends Model{
    protected $alias='proses';
    protected $columns=array(
        'sbu_id'=>'INT',
        'office_id'=>'INT',
        'lokasi_id'=>'INT',
        'user_id'=>'INT',
        'approval_id'=>'INT',
        'pic_id'=>'INT',
        'code_id'=>'INT',
        'step_id'=>'INT',
        'aset_id'=>'INT',
        'submission_id'=>'INT',
        'action_id'=>'INT',
        'rate_id'=>'INT DEFAULT 0',
        'tgl_submit'=>'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
        'tgl_approve'=>'DATETIME',
        'tgl_action'=>'DATETIME',
        'tgl_selesai'=>'DATETIME',
        'tgl_rate'=>'DATETIME',
        'tiket'=>'VARCHAR(24)',
        'catatan'=>'VARCHAR(256)',
    );
    public $join='sbu,office,lokasi,user,approval,pic,code,step,aset,submission,action,rate';
}