<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Migration_Add_orders extends CI_Migration {

        public function up()
        {
                $this->dbforge->add_field(array(
                        'id' => array(
                                'type' => 'INT',
                                'constraint' => 11,
                                'unsigned' => TRUE,
                                'auto_increment' => TRUE
                        ),
                        'name' => array(
                                'type' => 'VARCHAR',
                                'constraint' => '200',
                        ),
                        'count' => array(
                                'type' => 'INT',
                                'constraint' => '19',
                        ),
                        'price' => array(
                            'type' => 'INT',
                            'constraint' => '19',
                        ),
                ));
                $this->dbforge->add_key('id', TRUE);
                $this->dbforge->create_table('orders');
        }

        public function down()
        {
                $this->dbforge->drop_table('orders');
        }
}