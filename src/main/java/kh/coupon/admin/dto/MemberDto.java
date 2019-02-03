package kh.coupon.admin.dto;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="member")
public class MemberDto {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int member_no;
	@Column(name="member_name")
	private String memberName;
	private String member_id;
	private String member_password;
	private String member_profile;
	@Column(name="member_phone")
	private String memberPhone;
	private Date member_date_create;
	private Date member_date_update;
	private String member_nickname;
	@Column(name="member_class")
	private String memberClass;
	private String member_email;
	private String member_role;
	private String member_withdraw;
	private Date member_date_withdraw;
	private String member_enabled;
	
}
