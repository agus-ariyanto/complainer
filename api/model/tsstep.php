<?php 
class TsStep extends Model{
    protected $alias='step';
    protected $columns=array(
        'nama'=>'VARCHAR(64)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'Menunggu persetujuan'
        ),
        array(
            'id'=>2,
            'nama'=>'Sedang Ditindak-lanjuti',
        ),
        array(
            'id'=>3,
            'nama'=>'Di Tolak Atasan',
        ),
        array(
            'id'=>4,
            'nama'=>'Penjadwalan kembali'
        ),
        array(
            'id'=>5,
            'nama'=>'Selesai',
        ),
        
    );
}