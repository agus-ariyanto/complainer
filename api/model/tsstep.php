<?php 
class TsStep extends Model{
    protected $alias='step';
    protected $columns=array(
        'nama'=>'VARCHAR(64)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'Proses Pengajuan'
        ),
        array(
            'id'=>2,
            'nama'=>'Telah disetujui, masih dalam proses',
        ),
        array(
            'id'=>3,
            'nama'=>'Sedang ditindak lanjuti',
        ),
        array(
            'id'=>4,
            'nama'=>'Tindakan telah diselesaikan',
        ),
        array(
            'id'=>10,
            'nama'=>'Selesai',
        ),
        array(
            'id'=>11,
            'nama'=>'Ditolak Atasan',
        ),
        array(
            'id'=>12,
            'nama'=>'Ditolak PIC',
        ),
        
    );
}