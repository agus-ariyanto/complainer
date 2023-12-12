<?php 
class TsLokasi extends Model{
    protected $alias='lokasi';
    protected $columns=array(
        'sbu_id'=>'INT DEFAULT 1',
        'office_id'=>'INT DEFAULT 1',
        'nama'=>'VARCHAR(128)',
    );
    public $join = 'sbu,office';
/* 

   protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'JAMSOSTEK',
            'sbu_id'=>1,
        ),
        array(
            'id'=>2,
            'nama'=>'MAMPANG',
            'sbu_id'=>1,
        ),
        array(
            'id'=>3,
            'nama'=>'GANDUL',
            'sbu_id'=>1,
        ),
        array(
            'id'=>4,
            'nama'=>'CAWANG',
            'sbu_id'=>2,
        ),
    );

*/
    protected $firstdata=array(
        array(
            'id'=>1,
            'office_id'=>1,
            'sbu_id'=>1,
            'nama'=>'Lt. 10 - Wing Selatan',
        ),
        array(
            'id'=>2,
            'office_id'=>1,
            'sbu_id'=>1,
            'nama'=>'Lt. 10 - Wing Utara',
        ),
        array(
            'id'=>3,
            'office_id'=>1,
            'sbu_id'=>1,
            'nama'=>'Lt. 16 - Wing Selatan',
        ),
        array(
            'id'=>4,
            'office_id'=>1,
            'sbu_id'=>1,
            'nama'=>'Lt. 16 - Wing Utara',
        ),
        array(
            'id'=>5,
            'office_id'=>2,
            'sbu_id'=>1,
            'nama'=>'Lobby',
        ),
        array(
            'id'=>6,
            'office_id'=>2,
            'sbu_id'=>1,
            'nama'=>'Ruang Satpam',
        ),
        array(
            'id'=>7,
            'office_id'=>3,
            'sbu_id'=>1,
            'nama'=>'Lobby',
        ),
        array(
            'id'=>8,
            'office_id'=>3,
            'sbu_id'=>1,
            'nama'=>'Gudang Arsip',
        ),
        array(
            'id'=>9,
            'office_id'=>4,
            'sbu_id'=>2,
            'nama'=>'Lobby',
        ),
        array(
            'id'=>10,
            'office_id'=>4,
            'sbu_id'=>2,
            'nama'=>'Ruang Data',
        ),
    );
}