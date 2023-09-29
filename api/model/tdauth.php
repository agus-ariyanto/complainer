<?php
/*
id|usr|nama|pwd|bidang_id|grup_id|unit_id|token|phone| 
 */
class TdAuth extends Model{
    protected $alias='auth';
    protected $columns=array(
        'usr'=>'VARCHAR(128)',
        'name'=>'VARCHAR(128)',
        'phone'=>'VARCHAR(16)',
        'pwd'=>'VARCHAR(128)',
        'grup_id'=>'INT DEFAULT 1',
        'office_id'=>'INT DEFAULT 1',
        'company_id'=>'INT DEFAULT 1',
    );

    /*
    default untuk deployment hanya satu akun superadmin
    password admin = d033e22ae348aeb5660fc2140aec35850c4da997
    token = data user ldap login
    */

    	protected $firstdata=array(
    		array(
                'id'=>'1',
    			'usr'=>'admin',
                'name'=>'Admin',
                'pwd'=>'d033e22ae348aeb5660fc2140aec35850c4da997',
                'grup_id'=>'1',
                'office_id'=>'1',
                'company_id'=>'1',
    		),
            array(
                'id'=>'2',
    			'usr'=>'manager',
                'name'=>'Manager',
                'pwd'=>'d033e22ae348aeb5660fc2140aec35850c4da997',
                'grup_id'=>'2',
                'office_id'=>'1',
                'company_id'=>'1',
    		),
            array(
                'id'=>'3',
    			'usr'=>'officer',
                'name'=>'Officer',
                'pwd'=>'d033e22ae348aeb5660fc2140aec35850c4da997',
                'grup_id'=>'3',
                'office_id'=>'1',
                'company_id'=>'1',
    		),
        );

}
