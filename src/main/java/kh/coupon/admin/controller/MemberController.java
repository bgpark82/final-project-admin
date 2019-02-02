package kh.coupon.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import kh.coupon.admin.dao.MemberRepository;
import kh.coupon.admin.dto.MemberDto;

@RestController
public class MemberController {

	@Autowired
	private MemberRepository memberRepository;
	
	@GetMapping("api/memberDtoes/{name}")
	public List<MemberDto> findName(@PathVariable(name="name") String name){
		return memberRepository.findAllByMemberNameContaining(name);
	}
}
