<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller
{
	public function index()
	{
		$data = [
			'title' => 'register page',
			'heading' => 'This register page',
			'userName' => '',
			'userEmail' => '',
			'error' => ''
		];

		$a = "test" . " hello!";

		$data += [
			'temp_var' => $a
		];
		$this->parser->parse('login/index', $data);
	
		//$this->load->view('login/index');
	}

	public function register()
	{	
		$valid = true;

		if ($this->input->method() !== 'post')
		{
			return false;
		}

		//echo "register page";
		$post = $this->input->post(['userEmail', 'userName', 'userPassword'], TRUE);
		//print_r($post);

		if ($post['userEmail'] == '' || $post['userName'] == '' || $post['userPassword'] == '') {
			$valid = false;
		}

		if ($valid)
		{
			$this->addData($post);
			return true;
		}
		else
		{
			$name = (trim($post['userName']) == '' ? '' : $post['userName']);
			$email = (trim($post['userEmail']) == '' ? '' : $post['userEmail']);

			$data = [
				'title' => 'register page',
				'heading' => 'This register page',
				'userName' => $name,
				'userEmail' => $email,
				'error' => 'Bad data'
			];
			$this->parser->parse('login/index', $data);
		}

	}

	public function test_api()
	{
		$url = 'http://ciproject.loc:8080/api/user';

		$data = array();
		$data['id'] = '120';
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
		$icerik = curl_exec($ch);
		print_r($icerik);

		$dataReturn = json_decode($icerik, TRUE);

		echo $dataReturn['UserID'];

		//return $icerik;
		curl_close($ch);
	}

	private function addData($data)
	{
		$this->db->trans_begin();

		$this->name		= $data['userName'];
		$this->email	= $data['userEmail'];
		$this->password	= $data['userPassword'];

		$this->db->insert('users', $this);

		if ($this->db->trans_status() === FALSE)
		{
				$this->db->trans_rollback();
				return false;
		}
		else
		{
				$this->db->trans_commit();
				return true;
		}
	}
}
