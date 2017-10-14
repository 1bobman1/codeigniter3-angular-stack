<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller
{
	public function index()
	{
		//echo "TEST PAGE!";
		$this->load->view('layout');
	}

	public function get_data()
	{	
		$array = ['status'];
		if ( $this->input->is_ajax_request() )
		{
			$array['status'] = false;
			return false;
		}

		$array = [
			0 => 'user1',
			1 => 'user2',
			2 => 'user3',
			3 => 'user4',
			4 => 'user5',
		];
		$array['object'] = $array;
		$array['status'] = true;
		
		$this->output->set_content_type('application/json');
		$this->output->set_output(json_encode($array));
		return true;
	}
}
