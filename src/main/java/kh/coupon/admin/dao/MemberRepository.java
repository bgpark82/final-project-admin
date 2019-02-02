package kh.coupon.admin.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kh.coupon.admin.dto.MemberDto;

public interface MemberRepository extends JpaRepository<MemberDto, Integer>{

	List<MemberDto> findAllByMemberNameContaining(String name);
}
