<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller
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

	private function getAuthorization($data)
	{
		$user = $data['user']['email'];
		$password = $data['user']['password'];

		if ($user == 'qqq@qq.qq' && $password == '123')
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	public function siginIn()
	{
		$this->output->set_content_type('application/json');
		
		if ($this->input->method(TRUE) != 'POST')
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));			
			return false;
		}

		$input_data = json_decode(trim(file_get_contents('php://input')), true);

		if (!empty($input_data)) {
			$auth = $this->getAuthorization($input_data);

			if ($auth)
			{
				$newdata = array('user' => [
					'id' 		=> '1',
					'email'     => $input_data['user']['email'],
					'logged_in' => TRUE]
				);
				$data['status'] = true;				
				$this->session->set_userdata($newdata);
			} else {
				$data['status'] = false;
			}
		}
		
		$this->output->set_output(json_encode($data));
		return false;
	}
	
	public function siginOut()
	{
		$array = [];
		$this->output->set_content_type('application/json');
		
		if ($this->input->method(TRUE) != 'GET')
		{
			$data['status'] = false;
			$this->output->set_output(json_encode($data));			
			return false;
		}

		$this->session->unset_userdata('user');

		$data['status'] = true;
		$this->output->set_output(json_encode($data));
		return true;
	}
}