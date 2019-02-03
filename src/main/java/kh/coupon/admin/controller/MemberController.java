package kh.coupon.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kh.coupon.admin.dao.MemberRepository;
import kh.coupon.admin.dto.MemberDto;

@RestController
public class MemberController {

	@Autowired
	private MemberRepository memberRepository;
	
	@GetMapping("api/memberDtoes/{state}")
	public List<MemberDto> findName(@PathVariable(name="state") String state, @RequestParam String select){
		if(select.equals("1")) {
			return memberRepository.findAllByMemberNameContaining(state);
		} else if(select.equals("2")) {
			return memberRepository.findAllByMemberClassContaining(state);
		} else if(select.equals("3")) {
			return memberRepository.findAllByMemberPhoneContaining(state);
		}
		return null;
	}
}
