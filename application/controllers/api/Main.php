<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller
{
    public function get_data()
	{
		$array = [];
		$this->output->set_content_type('application/json');
		
		if ($this->input->method(TRUE) != 'GET')
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));			
			return false;
		}

		$array = [
			0 => 'user1',
			1 => 'user2',
			2 => 'user3',
			3 => 'user4',
			4 => 'user5',
		];
		$data['object'] = $array;
		$data['status'] = true;
		
		$this->output->set_output(json_encode($data));
		return true;
	}

	public function getAuthorization()
	{
		$array = [];
		$this->output->set_content_type('application/json');
		
		if ($this->input->method(TRUE) != 'POST')
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));			
			return false;
		}
		
		$array = [];
		$data['object'] = $array;
		$data['status'] = true;
		
		$this->output->set_output(json_encode($data));
		return true;
    }
}