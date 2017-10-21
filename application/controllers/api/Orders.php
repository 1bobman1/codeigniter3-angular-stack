<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Orders extends CI_Controller
{

	public function add_order()
	{
		$this->output->set_content_type('application/json');

		if ($this->input->method(TRUE) != 'POST')
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));			
			return false;
		}
		
		// $getAuth = $this->session->get('user');
		// if ($getAuth['logged_in'] !== TRUE)
		// {
		// 	$data['status'] = false;
		// 	$this->output->set_output(json_encode($data));
		// 	return false;
		// }

		$input_data = json_decode(trim(file_get_contents('php://input')), true);
		
		if (!empty($input_data)) {
			print_r($input_data);			
		}

		return true;
	}

	public function list_order()
	{
		$this->output->set_content_type('application/json');
		
		$getAuth = $this->session->get('user');
		if ($getAuth['logged_in'] !== TRUE)
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));
			return false;
		}

		return true;
	}
}